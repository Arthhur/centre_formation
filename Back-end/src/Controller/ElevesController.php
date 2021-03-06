<?php

namespace App\Controller;

use App\Entity\Eleves;
use App\Form\Eleves2Type;
use App\Repository\ElevesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/api")
 */
class ElevesController extends FOSRestController
{
    /**
   * Lists all Eleves.
   * @Rest\Get("/eleves")
   *
   * @return Response
   */
  public function getEleves()
  {
    $repository = $this->getDoctrine()->getRepository(Eleves::class);
    $eleves = $repository->findall();
    return $this->handleView($this->view($eleves));
  }

    /**
     * @Route("/", name="eleves_index", methods={"GET"})
     */
    public function index(ElevesRepository $elevesRepository): Response
    {
        return $this->render('eleves/index.html.twig', [
            'eleves' => $elevesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="eleves_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $elefe = new Eleves();
        $form = $this->createForm(Eleves2Type::class, $elefe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($elefe);
            $entityManager->flush();

            return $this->redirectToRoute('eleves_index');
        }

        return $this->render('eleves/new.html.twig', [
            'elefe' => $elefe,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eleves_show", methods={"GET"})
     */
    public function show(Eleves $elefe): Response
    {
        return $this->render('eleves/show.html.twig', [
            'elefe' => $elefe,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="eleves_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Eleves $elefe): Response
    {
        $form = $this->createForm(Eleves2Type::class, $elefe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('eleves_index', [
                'id' => $elefe->getId(),
            ]);
        }

        return $this->render('eleves/edit.html.twig', [
            'elefe' => $elefe,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eleves_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Eleves $elefe): Response
    {
        if ($this->isCsrfTokenValid('delete'.$elefe->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($elefe);
            $entityManager->flush();
        }

        return $this->redirectToRoute('eleves_index');
    }
}

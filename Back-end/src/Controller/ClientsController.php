<?php

namespace App\Controller;

use App\Entity\Clients;
use App\Form\ClientsType;
use App\Repository\ClientsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route ;

/**
 * @Route("/api")
 */
class ClientsController extends FOSRestController
{

    /**
   * Lists all Clients.
   * @Rest\Get("/get/clients")
   *
   * @return Response
   */
  public function getClients()
  {
    $repository = $this->getDoctrine()->getRepository(Clients::class);
    $clients = $repository->findall();
    return $clients ;
  }

    /**
     * @Route("/", name="clients_index", methods={"GET"})
     */
    public function index(ClientsRepository $clientsRepository): Response
    {
        return $this->render('clients/index.html.twig', [
            'clients' => $clientsRepository->findAll(),
        ]);
    }

    /**
   * Create Client.
   * @Rest\Post("/create/client")
   *
   */
    public function createClient(Request $request)
    {
        $client = new Clients();
        $client->setRs($request->get('rs'))
               ->setNom($request->get('nom'))
               ->setPrenom($request->get('prenom'))
               ->setEntreprise($request->get('entreprise'))
               ->setAdresse($request->get('adresse'))
               ->setCp($request->get('cp'))
               ->setTel($request->get('tel'))
               ->setFax($request->get('fax'))
               ->setEmail($request->get('email'))
               ->setTva($request->get('tva'))
               ->setApe($request->get('ape'));


        $em =  $this->getDoctrine()->getManager();
        $em->persist($client);
        $em->flush();

        return $client;
    }

    /**
     * @Route("/{id}", name="clients_show", methods={"GET"})
     */
    public function show(Clients $client): Response
    {
        return $this->render('clients/show.html.twig', [
            'client' => $client,
        ]);
    }

    /**
     * @Rest\Put("/edit/client/{id}"), name="clients_edit")
     */
    public function edit(Request $request)
    {
        $em =  $this->getDoctrine()->getManager();
        $client = $em->getRepository(Clients::class)
                    ->find($request->get('id'));
        $client->setRs($request->get('rs'))
               ->setNom($request->get('nom'))
               ->setPrenom($request->get('prenom'))
               ->setEntreprise($request->get('entreprise'))
               ->setAdresse($request->get('adresse'))
               ->setCp($request->get('cp'))
               ->setTel($request->get('tel'))
               ->setFax($request->get('fax'))
               ->setEmail($request->get('email'))
               ->setTva($request->get('tva'))
               ->setApe($request->get('ape'));

        $em->merge($client);
        $em->flush();

        return $client;
    }

    /**
     * @Rest\Delete("/delete/client/{id}"), name="clients_delete", methods={"DELETE"})
     */
    public function delete(Request $request)
    {
        $em =  $this->getDoctrine()->getManager(); ;
        $client = $em->getRepository(Clients::class)
                    ->find($request->get('id'));

        $em->remove($client);
        $em->flush();

        return $client ;
    }
}

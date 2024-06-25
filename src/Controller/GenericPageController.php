<?php

namespace App\Controller;

use App\Entity\Meetup;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GenericPageController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(EntityManagerInterface $em): Response
    {
        $nextMeetup = $em->getRepository(Meetup::class)->getNextMeetup();
        return $this->render('generic_page/index.html.twig', [
            'next_meet' => $nextMeetup
        ]);
    }
}

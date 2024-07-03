<?php

namespace App\Controller;

use App\Entity\Meetup;
use App\Repository\MeetupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GenericPageController extends AbstractController
{
    public function __construct(public MeetupRepository $meetupRepository)
    {
    }

    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        $nextMeetup = $this->meetupRepository->getNextMeetup();
        return $this->render('generic_page/index.html.twig', [
            'next_meet' => $nextMeetup
        ]);
    }

    #[Route('/code-of-conduct/', name: 'code-of-conduct')]
    public function codeOfConduct(): Response
    {
        return $this->render('generic_page/text-content.html.twig');
    }
}

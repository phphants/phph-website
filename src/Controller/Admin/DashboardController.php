<?php

namespace App\Controller\Admin;

use App\Entity\Admin;
use App\Entity\Meetup;
use App\Entity\Speaker;
use App\Repository\MeetupRepository;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    public function __construct(public MeetupRepository $meetupRepository)
    {
    }

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $meetup = $this->meetupRepository->getNextMeetup();

        return $this->render("admin/index.html.twig", [
            'user' => $this->getUser(),
            'meetup' => $meetup,
            'countdown' => $meetup !== null ? (new \DateTime())->diff($meetup->getDate()) : null
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('PHP Hants Admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Admins', 'fas fa-user', Admin::class);
        yield MenuItem::linkToCrud('Meetups', 'fas fa-calendar', Meetup::class);
        yield MenuItem::linkToCrud('Speakers', 'fas fa-users', Speaker::class);
        yield MenuItem::linkToLogout('Logout', 'fas fa-sign-out-alt');
    }
}

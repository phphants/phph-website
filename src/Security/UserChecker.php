<?php

namespace App\Security;

use App\Entity\Admin;
use App\Entity\User as AppUser;
use Symfony\Component\Security\Core\Exception\AccountExpiredException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof Admin) {
            return;
        }

        if (!$user->isActive()) {
            // the message passed to this exception is meant to be displayed to the user
            throw new CustomUserMessageAccountStatusException('Your user account has been disabled.');
        }
    }

    public function checkPostAuth(UserInterface $user): void
    {
        if (!$user instanceof Admin) {
            return;
        }
        dump('test');
        // user account is expired, the user may be notified
        if (!$user->isActive()) {
            throw new AccountExpiredException('...');
        }
    }
}
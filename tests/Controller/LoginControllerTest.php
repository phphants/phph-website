<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class LoginControllerTest extends WebTestCase
{
    public function testLoginPage(): void
    {
        $client = static::createClient();
        $client->request(Request::METHOD_GET, '/login');
        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
    }
}
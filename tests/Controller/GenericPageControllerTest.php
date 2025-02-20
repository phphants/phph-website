<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tests for the GenericPageController class.
 */
class GenericPageControllerTest extends WebTestCase
{
    public function testIndex(): void
    {
        $client = static::createClient();
        $client->request(Request::METHOD_GET, '/');
        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
    }

    public function testCodeOfConductPresent(): void
    {
        $client = static::createClient();
        $client->request(Request::METHOD_GET, '/code-of-conduct/');
        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
    }

    public function testNotFound(): void
    {
        $client = static::createClient();
        $client->request(Request::METHOD_GET, '/garbage-link');
        $this->assertEquals(Response::HTTP_NOT_FOUND, $client->getResponse()->getStatusCode());
    }
}
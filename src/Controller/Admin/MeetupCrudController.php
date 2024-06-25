<?php

namespace App\Controller\Admin;

use App\Entity\Meetup;
use App\Entity\Speaker;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class MeetupCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Meetup::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id', 'ID')->hideOnForm();
        yield TextField::new('name', 'Name');
        yield TextareaField::new('description', 'Description');
        yield DateTimeField::new('date', 'Date');
        yield AssociationField::new('speaker', 'Speaker')->autocomplete()->setQueryBuilder(
            fn(QueryBuilder $queryBuilder) => $queryBuilder->getEntityManager()->getRepository(Speaker::class)->findAll()
        )->setSortProperty('name');
    }

}

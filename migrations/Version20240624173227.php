<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624173227 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE speaker (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, bio LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8');
        $this->addSql('ALTER TABLE meetup ADD speaker_id INT NOT NULL');
        $this->addSql('ALTER TABLE meetup ADD CONSTRAINT FK_9377E28D04A0F27 FOREIGN KEY (speaker_id) REFERENCES speaker (id)');
        $this->addSql('CREATE INDEX IDX_9377E28D04A0F27 ON meetup (speaker_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE speaker');
        $this->addSql('ALTER TABLE meetup DROP FOREIGN KEY FK_9377E28D04A0F27');
        $this->addSql('DROP INDEX IDX_9377E28D04A0F27 ON meetup');
        $this->addSql('ALTER TABLE meetup DROP speaker_id');
    }
}

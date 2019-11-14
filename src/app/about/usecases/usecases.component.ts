import { Component, OnInit } from '@angular/core'
import { UseCase } from '../usecase.model'

@Component({
  selector: 'app-about-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss']
})
export class UsecasesComponent implements OnInit {
  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'Gebruiker heeft een account.',
      postcondition: 'De actor is ingelogd.'
    },
    {
      id: 'UC-02',
      name: 'Account aanmaken',
      description: 'Hiermee kan een gebruiker een account aanmaken.',
      scenario: [
        'Gebruiker voert zijn gegevens in en klikt op de registreren knop',
        'De applicatie valideert of de emailadres al bestaat.',
        'Indien gegevens correct zijn wordt de gebruiker toegevoegd aan de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'geen',
      postcondition: 'De gebruiker heeft een account in de database.'
    },
    {
      id: 'UC-03',
      name: 'Games ophalen',
      description: 'Hiermee kan een gebruiker de games ophalen.',
      scenario: [
        'Gebruiker navigeert naar de games pagina.',
        'De applicatie haalt alle games uit de database en sorteerd ze op release datum.',
        'De applicatie toont de gegevens in de pagina.'
      ],
      actor: 'Reguliere gebruiker/Administrator',
      precondition: 'geen',
      postcondition: 'De gebruiker kan de games bekijken.'
    },
    {
      id: 'UC-04',
      name: 'Nieuwe game toevoegen',
      description: 'Hiermee kan een administrator een game toevoegen.',
      scenario: [
        'Administrator voert de gegevens van de game in en klikt op de toevoegen knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de game toegevoegd aan de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De game is toegevoegd in de database.'
    },
    {
      id: 'UC-05',
      name: 'Bestaande game aanpassen.',
      description: 'Hiermee kan een administrator een game aanpassen.',
      scenario: [
        'Administrator zoekt de game op en klikt op bijwerken.',
        'Administrator voert de nieuwe gegevens van de game in en klikt op de bewerken knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de game aangepast in de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De game is bewerkt in de database.'
    },
    {
      id: 'UC-06',
      name: 'Bestaande game verwijderen.',
      description: 'Hiermee kan een administrator een game verwijderen.',
      scenario: [
        'Administrator zoekt de game op en klikt op bijwerken.',
        'Administrator klikt op verwijderen.',
        'De applicatie stuurt een bericht met de vraag of de gebruiker zeker is.',
        'De game wordt verwijderd uit de database',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De game is verwijderd uit de database.'
    },
    {
      id: 'UC-07',
      name: 'Publishers ophalen',
      description: 'Hiermee kan een gebruiker de publishers ophalen.',
      scenario: [
        'Gebruiker navigeert naar de publishers pagina.',
        'De applicatie haalt alle publishers uit de database.',
        'De applicatie toont de gegevens in de pagina.'
      ],
      actor: 'Reguliere gebruiker/Administrator',
      precondition: 'geen',
      postcondition: 'De gebruiker kan de publishers bekijken.'
    },
    {
      id: 'UC-08',
      name: 'Nieuwe publisher toevoegen',
      description: 'Hiermee kan een administrator een publisher toevoegen.',
      scenario: [
        'Administrator voert de gegevens van de publisher in en klikt op de toevoegen knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de publisher toegevoegd aan de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De publisher is toegevoegd in de database.'
    },
    {
      id: 'UC-09',
      name: 'Bestaande publisher aanpassen.',
      description: 'Hiermee kan een administrator een publisher aanpassen.',
      scenario: [
        'Administrator zoekt de publisher op en klikt op bijwerken.',
        'Administrator voert de nieuwe gegevens van de publisher in en klikt op de bewerken knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de publisher aangepast in de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De publisher is bewerkt in de database.'
    },
    {
      id: 'UC-10',
      name: 'Bestaande publisher verwijderen.',
      description: 'Hiermee kan een administrator een publisher verwijderen.',
      scenario: [
        'Administrator zoekt de publisher op en klikt op bijwerken.',
        'Administrator klikt op verwijderen.',
        'De applicatie stuurt een bericht met de vraag of de gebruiker zeker is.',
        'De publisher wordt verwijderd uit de database',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De publisher is verwijderd uit de database.'
    },

    {
      id: 'UC-11',
      name: 'Developers ophalen',
      description: 'Hiermee kan een gebruiker de developers ophalen.',
      scenario: [
        'Gebruiker navigeert naar de developers pagina.',
        'De applicatie haalt alle developers uit de database en sorteerd ze op release datum.',
        'De applicatie toont de gegevens in de pagina.'
      ],
      actor: 'Reguliere gebruiker/Administrator',
      precondition: 'geen',
      postcondition: 'De gebruiker kan de developers bekijken.'
    },
    {
      id: 'UC-12',
      name: 'Nieuwe developer toevoegen',
      description: 'Hiermee kan een administrator een developer toevoegen.',
      scenario: [
        'Administrator voert de gegevens van de developer in en klikt op de toevoegen knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de developer toegevoegd aan de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De developer is toegevoegd in de database.'
    },
    {
      id: 'UC-13',
      name: 'Bestaande developer aanpassen.',
      description: 'Hiermee kan een administrator een developer aanpassen.',
      scenario: [
        'Administrator zoekt de developer op en klikt op bijwerken.',
        'Administrator voert de nieuwe gegevens van de developer in en klikt op de bewerken knop.',
        'De applicatie valideert of de velden zijn ingevuld.',
        'Indien gegevens correct zijn wordt de developer aangepast in de database.',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De developer is bewerkt in de database.'
    },
    {
      id: 'UC-14',
      name: 'Bestaande developer verwijderen.',
      description: 'Hiermee kan een administrator een developer verwijderen.',
      scenario: [
        'Administrator zoekt de developer op en klikt op bijwerken.',
        'Administrator klikt op verwijderen.',
        'De applicatie stuurt een bericht met de vraag of de gebruiker zeker is.',
        'De developer wordt verwijderd uit de database',
        'De applicatie redirect de gebruiker naar het startscherm .'
      ],
      actor: 'Administrator',
      precondition: 'De administrator is ingelogd.',
      postcondition: 'De developer is verwijderd uit de database.'
    },
    {
      id: 'UC-15',
      name: 'Game toevoegen aan lijst.',
      description: 'Hiermee kan een gebruiker een game toevoegen aan zijn/haar lijst.',
      scenario: [
        'gebruiker zoekt een game op en klikt op de toevoegen knop.',
        'De game wordt toegevoegd aan de gebruikerslijst(van de huidige gebruiker) in de database'
      ],
      actor: 'Reguliere gebruiker',
      precondition: 'De gebruiker is ingelogd.',
      postcondition: 'De game is toegevoegd aan de gebruikerslijst in de database.'
    }
  ]

  constructor() {}

  ngOnInit() {}
}

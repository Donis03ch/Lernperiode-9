# Lernperiode-9
Grob-Planung

14.02.2025 bis 04.04.2025

## Leit-Satz

*-* Aktuell stehen meine Noten in einem guten Bereich. Mein Objektiv wäre möglichst in diesem Bereich zu bleiben. </br>
*-* In der LP-9 möchte ich weiter an meinen Cardgame arbeiten.

## Arbeitspakete für 14.02.2025

- [x] Aufträge & Repetition von M347
- [x] =
- [x] =
- [ ] evtl. Pokergame fortfahren

Heute habe ich einige Auträge des Modules 347 bearbeitet und das ganze Thema um Docker nochmals repetiert. Ich fühle mich sicherer damit nach dem heutigen Tag. (26 Wörter)

## Arbeitspakete für 21.02.2025

Grobe vorstellung: Arbeit an dem Poker und ein weiteres Kartenspiel hinzufügen.

- [ ] Poker.cs
- [x] Card.cs
- [x] Player.cs

Heute habe ich an dem Pokergame die Klassen erstellt. Ich habe eine Funktion, die mit der Sprachversion 8.0 arbeitet, aber leider wurde mein Projekt mit dem .NET Framwework erstellt. Dieses Framework Template unterstützt nur die Version 7.3, was für mich nicht genügt. Ich werde mir das nächste mal kurz die Zeit nehmen, mein ganzes Projekt auf die richtige .Net Version zu kopieren. (62 Wörter)

## Arbeitspakete für 28.02.2025

Grobe vorstellung: Ein neues Kartenspiel hinzufügen.

- [x] ...
- [x] ...
- [ ] ...

I had to move my entire project to a new .NET framework because the language version 8.0 wasn't supported in the one I was using. I then spent some time looking for a new card game to add to my project. I remembered a game I used to play with my family, so I decided to go with that. </br>
The "Main" method starts the game by welcoming players and setting up the deck of cards. The "CreateDeck" function creates a standard deck with 52 cards.
The "ShuffleDeck" function mixes up the cards randomly, making each game start with a different arrangement. This adds excitement and fairness to the game.
The "DealCards" function gives each player a set number of cards from the deck. It ensures everyone has the right amount of cards to start playing.
The game loop in the "Main" method handles the turn-based gameplay. Players take turns, see their cards and the middle cards, and choose a card to play. If the played card matches the top card in the middle, the player collects all the middle cards; otherwise, the played card is added to the middle. The game continues until a player runs out of cards.
The "CalculateScore" function determines each player's score based on the cards they've collected. Face cards and Jokers get points: Aces are worth 4, Kings 3, Queens 2, Jacks 1, and Jokers 5. This scoring system makes the game more strategic.
The "Player" class holds information about each player, like their name, current cards, collected cards, and score. This class helps manage player data throughout the game.

## Arbeitspakete für 07.03.2025

Grobe vorstellung: ...

- [ ] ...
- [ ] ...
- [ ] ...

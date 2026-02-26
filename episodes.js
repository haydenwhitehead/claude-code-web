// Supernatural Episode Data — Fun Facts & Trivia
// Covers key episodes from all 15 seasons

var EPISODES = {
  1: [
    { ep: 1, title: "Pilot", aired: "September 13, 2005", director: "David Nutter", facts: [
      "The original pilot was shot in Los Angeles, but the series moved production to Vancouver for the rest of its run.",
      "Jared Padalecki auditioned for the role of Dean, not Sam. Jensen Ackles was originally considered for Sam.",
      "The Woman in White legend featured in this episode is based on the real La Llorona folklore from Latin America.",
      "Creator Eric Kripke originally pitched the show as a movie before reworking it into a TV series.",
      "The 1967 Chevy Impala was chosen because it was large enough to store a body in the trunk — a practical decision for hunters."
    ]},
    { ep: 2, title: "Wendigo", aired: "September 20, 2005", director: "David Nutter", facts: [
      "This was one of the first episodes to establish the 'monster of the week' format that defined the early seasons.",
      "The Wendigo creature is drawn from Algonquian mythology, where it represents the dangers of greed and cannibalism.",
      "The cave scenes were filmed in an actual mine shaft outside Vancouver."
    ]},
    { ep: 9, title: "Home", aired: "November 15, 2005", director: "Ken Girotti", facts: [
      "This episode marks the first appearance of psychic Missouri Moseley, one of John Winchester's old contacts.",
      "It is the first episode where we see inside the Winchester family home in Lawrence, Kansas.",
      "The poltergeist effects were achieved almost entirely with practical effects rather than CGI."
    ]},
    { ep: 11, title: "Scarecrow", aired: "January 10, 2006", director: "Kim Manners", facts: [
      "The pagan god Vanir referenced in this episode is drawn from actual Norse mythology.",
      "This episode introduces Meg Masters, who would become a recurring antagonist throughout the series.",
      "Emily Perkins, who plays the small-town girl, is well known for playing Brigitte in the Ginger Snaps horror films."
    ]},
    { ep: 12, title: "Faith", aired: "January 17, 2006", director: "Allan Kroeker", facts: [
      "This is the first episode to deal with a reaper, a concept that would become a major part of Supernatural mythology.",
      "Julie Benz, who plays Layla, was also famous for playing Darla on Buffy the Vampire Slayer and Angel.",
      "The episode was partly inspired by real-world faith healing controversies."
    ]},
    { ep: 17, title: "Hell House", aired: "March 30, 2006", director: "Chris Long", facts: [
      "This episode introduces fan-favorites Ed Zeddmore and Harry Spangler, the Ghostfacers.",
      "The Tulpa concept — a thought-form brought to life by collective belief — is drawn from Tibetan mysticism.",
      "The prank war between Sam and Dean in this episode was partly improvised by the actors."
    ]},
    { ep: 22, title: "Devil's Trap", aired: "May 4, 2006", director: "Kim Manners", facts: [
      "The season finale was the first time the full Devil's Trap sigil was shown on screen.",
      "The Colt revolver prop was custom-built by the props department and became one of the most iconic items in the series.",
      "The cliffhanger truck crash ending was designed before the show knew it was renewed — Eric Kripke planned it as a possible series finale."
    ]}
  ],
  2: [
    { ep: 1, title: "In My Time of Dying", aired: "September 28, 2006", director: "Kim Manners", facts: [
      "Jeffrey Dean Morgan's performance as John Winchester making the deal was filmed in a single take.",
      "The reaper Tessa made a strong impression on fans in her debut appearance.",
      "This episode was the highest-rated season premiere of the entire series run."
    ]},
    { ep: 6, title: "No Exit", aired: "November 2, 2006", director: "Kim Manners", facts: [
      "The episode features H.H. Holmes, who was a real serial killer considered America's first serial killer.",
      "This marks the first time Jo Harvelle goes on a hunt, establishing her character arc.",
      "Holmes' 'Murder Castle' in the episode is based on a real building he constructed in Chicago in the 1890s."
    ]},
    { ep: 15, title: "Tall Tales", aired: "February 15, 2007", director: "Bradford May", facts: [
      "This episode introduces the Trickster, a mischievous and powerful being who loves toying with people.",
      "The unreliable narrator format — with Sam and Dean telling conflicting versions — was inspired by the Rashomon storytelling technique.",
      "Richard Speight Jr., who plays the Trickster, became one of the most beloved recurring actors in the franchise."
    ]},
    { ep: 18, title: "Hollywood Babylon", aired: "April 19, 2007", director: "Philip Sgriccia", facts: [
      "This meta episode pokes fun at the Hollywood production process, including thinly veiled jabs at network notes.",
      "The fake horror movie being filmed in the episode contains several references to real Supernatural production challenges.",
      "Gary Cole's guest appearance as the producer was a nod to his comedic roles in Office Space and other films."
    ]},
    { ep: 20, title: "What Is and What Should Never Be", aired: "May 3, 2007", director: "Eric Kripke", facts: [
      "This is the first episode directed by series creator Eric Kripke.",
      "The 'wish-verse' concept showed what Sam and Dean's lives would be like without hunting — it became a fan-favorite episode.",
      "Jensen Ackles has cited this as one of his personal favorite episodes to film."
    ]},
    { ep: 22, title: "All Hell Breaks Loose: Part 2", aired: "May 17, 2007", director: "Kim Manners", facts: [
      "Dean's crossroads deal to bring Sam back — with just one year to live — is one of the most emotionally charged moments in the series.",
      "The opening of the Devil's Gate in Wyoming was the most VFX-heavy sequence the show had produced at that point.",
      "Bobby's line 'Family don\\'t end with blood' became one of the most quoted lines in the entire series."
    ]}
  ],
  3: [
    { ep: 1, title: "The Magnificent Seven", aired: "October 4, 2007", director: "Kim Manners", facts: [
      "The Seven Deadly Sins as demons was a concept Kripke had wanted to explore since Season 1.",
      "This season was shortened from 22 to 16 episodes due to the 2007-2008 Writers Guild strike.",
      "Ruby is introduced in this episode, played by Katie Cassidy before the role was recast."
    ]},
    { ep: 8, title: "A Very Supernatural Christmas", aired: "December 13, 2007", director: "J. Miller Tobin", facts: [
      "The pagan gods in this episode are disguised as a cheerful suburban couple, played for dark comedy.",
      "The flashback scenes showing young Sam and Dean at Christmas established much of their childhood backstory.",
      "The amulet Sam gives young Dean in the flashback became a fan-favorite prop from the moment it appeared."
    ]},
    { ep: 11, title: "Mystery Spot", aired: "February 14, 2008", director: "Kim Manners", facts: [
      "The Groundhog Day-style time loop made this one of the most beloved episodes in the entire series.",
      "Asia's 'Heat of the Moment' became permanently associated with the show thanks to this episode.",
      "Jared Padalecki had to perform over 100 variations of waking up for the looping scenes.",
      "The Trickster's motivations — trying to teach Sam to accept Dean's death — add surprising emotional depth to a comedic character."
    ]},
    { ep: 16, title: "No Rest for the Wicked", aired: "May 15, 2008", director: "Kim Manners", facts: [
      "Dean being dragged to Hell by hellhounds became one of the most iconic images in the show's history.",
      "The season finale was written to work as a potential series finale since renewal was uncertain.",
      "Jensen Ackles performed the Hell scenes with minimal makeup — the terror is almost entirely acting."
    ]}
  ],
  4: [
    { ep: 1, title: "Lazarus Rising", aired: "September 18, 2008", director: "Kim Manners", facts: [
      "Castiel's first appearance — walking through the barn doors as sparks fly — is one of the most iconic introductions in TV history.",
      "Misha Collins was only supposed to appear in a few episodes but became a series regular due to fan response.",
      "The handprint scar on Dean's shoulder was applied with a custom prosthetic mold of Misha Collins' actual hand.",
      "Castiel's line 'I'm the one who gripped you tight and raised you from perdition' was the first line Misha Collins filmed."
    ]},
    { ep: 6, title: "Yellow Fever", aired: "October 23, 2008", director: "Philip Sgriccia", facts: [
      "Jensen Ackles' 'Eye of the Tiger' lip-sync performance during the end credits was completely improvised on set.",
      "The crew loved the performance so much they included the full uncut version as bonus content.",
      "Dean screaming at a cat became one of the most popular GIFs from the show."
    ]},
    { ep: 10, title: "Heaven and Hell", aired: "November 20, 2008", director: "J. Miller Tobin", facts: [
      "This episode reveals Dean's memories of torturing souls in Hell — Jensen Ackles has said this was the hardest scene he ever filmed.",
      "Anna Milton's storyline about a fallen angel added new layers to the show's expanding angel mythology.",
      "The episode required the largest number of extras for the angel battle sequences up to that point."
    ]},
    { ep: 17, title: "It's a Terrible Life", aired: "March 26, 2009", director: "James L. Conway", facts: [
      "Sam and Dean work as office drones named 'Sam Wesson' and 'Dean Smith' — a nod to gun manufacturers Smith & Wesson.",
      "The episode is a commentary on the idea that the Winchesters are destined to be hunters no matter what.",
      "Jensen Ackles wore a suit for nearly the entire episode, a stark contrast to Dean's usual flannel and leather."
    ]},
    { ep: 18, title: "The Monster at the End of This Book", aired: "April 2, 2009", director: "Mike Rohl", facts: [
      "This episode introduces Chuck Shurley and the 'Supernatural' book series, breaking the fourth wall for the first time.",
      "The title is taken from a beloved Sesame Street children's book featuring Grover.",
      "Chuck Shurley as the 'prophet' author of the Supernatural books instantly became one of the show's most intriguing recurring characters.",
      "The in-universe fandom of the books mirrors the real Supernatural fandom, complete with 'Samlicker81' fan fiction."
    ]},
    { ep: 22, title: "Lucifer Rising", aired: "May 14, 2009", director: "Eric Kripke", facts: [
      "The season finale features Lucifer rising from his cage — Mark Pellegrino was cast just days before filming.",
      "The convent set where Lucifer rises was one of the most expensive sets built for the series.",
      "Eric Kripke's original five-season plan culminated with this arc, making Seasons 1-5 a complete story."
    ]}
  ],
  5: [
    { ep: 1, title: "Sympathy for the Devil", aired: "September 10, 2009", director: "Robert Singer", facts: [
      "Mark Pellegrino's portrayal of Lucifer as calm and sympathetic rather than overtly evil was a deliberate choice by the writers.",
      "The episode's title references the Rolling Stones song, continuing the show's tradition of classic rock references.",
      "Bobby becoming paralyzed in this episode was a major status quo change that lasted for multiple episodes."
    ]},
    { ep: 4, title: "The End", aired: "October 1, 2009", director: "Steve Boyum", facts: [
      "Jensen Ackles played two versions of Dean — present and future — often in the same scene, requiring split-screen filming.",
      "Future Castiel as a hippie cult leader was Misha Collins' idea and became an instant fan favorite.",
      "The post-apocalyptic 2014 setting was filmed at an actual abandoned summer camp."
    ]},
    { ep: 8, title: "Changing Channels", aired: "November 5, 2009", director: "Charles Beeson", facts: [
      "The Trickster is finally revealed to be the archangel Gabriel in this episode.",
      "The fake TV show parodies include Grey's Anatomy, CSI Miami, a Japanese game show, and a sitcom with a laugh track.",
      "Jensen and Jared performed the fake opening credits of a medical drama entirely straight-faced in one take.",
      "The Genital Herpes commercial parody required multiple takes because the cast kept breaking character laughing."
    ]},
    { ep: 10, title: "Abandon All Hope...", aired: "November 19, 2009", director: "Philip Sgriccia", facts: [
      "This episode features the deaths of Jo and Ellen Harvelle, which the writers have called one of the hardest decisions of the series.",
      "Mark Pellegrino and Mark Sheppard (Crowley) appear on screen together for the first time.",
      "The title references the inscription above the gates of Hell in Dante's Inferno."
    ]},
    { ep: 16, title: "Dark Side of the Moon", aired: "April 1, 2010", director: "Jeff Woolnough", facts: [
      "Sam and Dean literally die and go to Heaven, exploring personal heavenly memories.",
      "The revelation that Sam's best memories don't include Dean deeply affected their relationship arc.",
      "Ash's appearance in Heaven, using the Roadhouse as his personal heaven, was a fan-requested cameo."
    ]},
    { ep: 22, title: "Swan Song", aired: "May 13, 2010", director: "Steve Boyum", facts: [
      "This was intended as the series finale when Eric Kripke planned his five-season arc.",
      "Chuck's final monologue about the Impala was written by Kripke himself as a love letter to the show.",
      "Jared Padalecki performed Sam's sacrifice scene with real tears — the emotion was genuine.",
      "The episode is widely considered one of the greatest finales in television history, despite the show continuing.",
      "The montage of the toy soldier in the Impala's ashtray connects all the way back to Season 1's flashbacks."
    ]}
  ],
  6: [
    { ep: 1, title: "Exile on Main St.", aired: "September 24, 2010", director: "Philip Sgriccia", facts: [
      "This is the first season without Eric Kripke as showrunner — Sera Gamble took over.",
      "Dean living a domestic life with Lisa and Ben was a deliberate contrast to every previous season premiere.",
      "The Djinn attack on Dean's suburban home deliberately blends horror with mundane domestic settings."
    ]},
    { ep: 9, title: "Clap Your Hands If You Believe...", aired: "November 19, 2010", director: "John Showalter", facts: [
      "The episode opens with a full X-Files parody, complete with a recreation of the X-Files opening credits.",
      "Soulless Sam's deadpan reactions to fairy encounters provided some of the season's biggest comedic moments.",
      "The fairy lore in this episode draws from actual Celtic mythology rather than Disney-style fairies."
    ]},
    { ep: 15, title: "The French Mistake", aired: "February 25, 2011", director: "Charles Beeson", facts: [
      "Sam and Dean are transported into our reality where they are actors named 'Jared Padalecki' and 'Jensen Ackles' on a TV show.",
      "Misha Collins plays a fictionalized parody of himself live-tweeting from set.",
      "The fake Supernatural set in the episode was actually the real Supernatural set slightly redressed.",
      "This is widely considered the most meta episode of any TV show ever made.",
      "Genevieve Padalecki (Jared's real wife) plays herself as Jared's wife — they were actually married at the time of filming."
    ]}
  ],
  7: [
    { ep: 1, title: "Meet the New Boss", aired: "September 23, 2011", director: "Philip Sgriccia", facts: [
      "Castiel declaring himself the new God was Misha Collins' favorite storyline to play.",
      "The Leviathans bursting out of Castiel were achieved with a mix of practical prosthetics and CGI.",
      "The 'Godstiel' scenes were filmed in an actual church in Vancouver."
    ]},
    { ep: 10, title: "Death's Door", aired: "December 2, 2011", director: "Robert Singer", facts: [
      "Bobby Singer's death episode is considered one of the most emotional episodes in the entire series.",
      "Jim Beaver (Bobby) was told about his character's death well in advance so he could prepare emotionally.",
      "The episode takes place almost entirely inside Bobby's mind as he fights a reaper.",
      "Bobby's final word — 'Idjits' — was ad-libbed by Jim Beaver."
    ]},
    { ep: 20, title: "The Girl with the Dungeons and Dragons Tattoo", aired: "April 27, 2012", director: "John MacCarthy", facts: [
      "This episode introduces Charlie Bradbury, played by Felicia Day, who became one of the show's most popular recurring characters.",
      "Charlie was written specifically for Felicia Day after the writers met her at a convention.",
      "The hacking scenes were praised by actual IT professionals as being more realistic than most TV depictions."
    ]}
  ],
  8: [
    { ep: 1, title: "We Need to Talk About Kevin", aired: "October 3, 2012", director: "Robert Singer", facts: [
      "This episode introduces Dean's time in Purgatory, which was filmed with a desaturated blue filter to distinguish it from Earth.",
      "Osric Chau's role as Kevin Tran was expanded significantly after positive fan reception.",
      "The Purgatory flashback fight scenes were choreographed by the same team that worked on Arrow."
    ]},
    { ep: 11, title: "LARP and the Real Girl", aired: "January 23, 2013", director: "Jeannot Szwarc", facts: [
      "The LARP (Live Action Role Playing) battle scenes featured over 200 extras in full costume.",
      "Felicia Day helped choreograph the battle scenes based on her own experience with gaming culture.",
      "Dean's enthusiastic participation in LARPing showed a lighter side of his character."
    ]},
    { ep: 13, title: "Everybody Hates Hitler", aired: "February 6, 2013", director: "Phil Sgriccia", facts: [
      "This episode introduces the Men of Letters bunker, which became the Winchesters' home base for the rest of the series.",
      "The Judah Initiative storyline about rabbis creating a Golem to fight Nazis draws from real Jewish folklore.",
      "The bunker set was one of the most expensive permanent sets built for the show."
    ]},
    { ep: 17, title: "Goodbye Stranger", aired: "March 20, 2013", director: "Thomas J. Wright", facts: [
      "The opening scene where Castiel kills hundreds of Dean copies in a training exercise was Misha Collins' most physically demanding day of filming.",
      "Meg's final episode features her sacrifice, ending a character arc that spanned from Season 1.",
      "The Crypt scene between Dean and Castiel is considered a pivotal moment in their friendship."
    ]}
  ],
  9: [
    { ep: 5, title: "Dog Dean Afternoon", aired: "November 5, 2013", director: "Tim Andrew", facts: [
      "Jensen Ackles performed all of Dean's dog-like behaviors — barking at the mailman, fetching — without any CGI enhancement.",
      "The animal shelter scenes used real shelter dogs, and several were adopted by crew members after filming.",
      "This episode is one of the most polarizing in the fandom — fans either love it or hate it."
    ]},
    { ep: 11, title: "First Born", aired: "January 21, 2014", director: "John Badham", facts: [
      "Timothy Omundson's portrayal of Cain became an instant fan favorite despite only appearing in a handful of episodes.",
      "The Mark of Cain mythology was created specifically for this episode and instantly became a fan-favorite storyline.",
      "The fight choreography between Dean and the demons was praised as some of the best in the series."
    ]},
    { ep: 18, title: "Meta Fiction", aired: "April 15, 2014", director: "Thomas J. Wright", facts: [
      "Metatron literally breaks the fourth wall by addressing the audience and discussing narrative structure.",
      "Curtis Armstrong (Metatron) improvised several of his monologues about storytelling.",
      "The episode contains references to Casablanca, The Wizard of Oz, and numerous other classic films."
    ]},
    { ep: 23, title: "Do You Believe in Miracles?", aired: "May 20, 2014", director: "Thomas J. Wright", facts: [
      "Dean's death and resurrection as a demon in the final moments was kept secret from most of the cast until table read.",
      "The black-eye reveal at the end is considered one of the best cliffhangers in the show's history.",
      "Jensen Ackles spent weeks researching how to play a demon version of Dean for the following season."
    ]}
  ],
  10: [
    { ep: 1, title: "Black", aired: "October 7, 2014", director: "Robert Singer", facts: [
      "Demon Dean singing karaoke to 'I'm Too Sexy' was Jensen Ackles' idea.",
      "The Season 10 premiere was watched by over 2.5 million viewers.",
      "Jensen Ackles has said playing Demon Dean was the most fun he had in any season."
    ]},
    { ep: 5, title: "Fan Fiction", aired: "November 11, 2014", director: "Philip Sgriccia", facts: [
      "This was the 200th episode of Supernatural and served as a love letter to the fanbase.",
      "The all-girls school musical of 'Supernatural' featured original songs written specifically for the episode.",
      "The 'single man tear' joke is a direct reference to fan fiction tropes about Dean.",
      "Chuck's brief surprise appearance at the end delighted fans who had been wondering about his whereabouts."
    ]},
    { ep: 23, title: "Brother's Keeper", aired: "May 20, 2015", director: "Philip Sgriccia", facts: [
      "The removal of the Mark of Cain unleashing the Darkness was planned as a two-season arc from the beginning.",
      "Death's apparent destruction was controversial — fans debated whether he was truly dead for years.",
      "Emily Swallow was cast as the Darkness/Amara before the season finale even aired."
    ]}
  ],
  11: [
    { ep: 4, title: "Baby", aired: "October 28, 2015", director: "Thomas J. Wright", facts: [
      "The entire episode is filmed from the Impala's point of view — every shot is from inside, on top of, or beside the car.",
      "It took 14 days to film instead of the usual 8 due to the unique camera restrictions.",
      "The Impala needed extensive interior modifications to mount cameras in every angle.",
      "This episode is consistently ranked as one of the top 5 episodes in the entire series by fans.",
      "Jensen and Jared's 'Night Moves' sing-along was filmed in one take."
    ]},
    { ep: 8, title: "Just My Imagination", aired: "December 2, 2015", director: "Richard Speight Jr.", facts: [
      "Sully the imaginary friend was created to explore Sam's childhood loneliness.",
      "Nate Torrence (Sully) wore a full Zanna costume with prosthetic makeup that took 3 hours to apply.",
      "Richard Speight Jr. (the Trickster) directed this episode, his first of many for the series."
    ]},
    { ep: 20, title: "Don't Call Me Shurley", aired: "May 4, 2016", director: "Robert Singer", facts: [
      "This episode officially confirms that Chuck Shurley is God.",
      "Rob Benedict's (Chuck) performance was filmed in a single bar set over two days.",
      "The Metatron and God scenes were written as a two-hander play, unusual for the action-heavy show.",
      "The fog spreading across the world was the most extensive VFX sequence of Season 11."
    ]},
    { ep: 23, title: "Alpha and Omega", aired: "May 25, 2016", director: "Philip Sgriccia", facts: [
      "The season finale features a sun bomb plan to destroy Amara, requiring 200,000 souls.",
      "Mary Winchester's resurrection in the final moments set up the entire Season 12 arc.",
      "The reconciliation between God and Amara was intended as a metaphor for sibling relationships."
    ]}
  ],
  12: [
    { ep: 1, title: "Keep Calm and Carry On", aired: "October 13, 2016", director: "Philip Sgriccia", facts: [
      "The British Men of Letters arc was inspired by the idea of a more organized, bureaucratic approach to hunting.",
      "Samantha Smith returned as Mary Winchester for the first extended role since the pilot.",
      "Mary's culture shock at modern technology provided unexpected comedy throughout the season."
    ]},
    { ep: 9, title: "First Blood", aired: "January 26, 2017", director: "Robert Singer", facts: [
      "Sam and Dean being held in a secret government black site was filmed in an actual decommissioned government building.",
      "The episode plays like a thriller rather than a supernatural show for most of its runtime.",
      "The deal with Billie the Reaper adds high stakes and tension to the brothers' escape."
    ]},
    { ep: 12, title: "Stuck in the Middle (With You)", aired: "February 16, 2017", director: "Richard Speight Jr.", facts: [
      "The entire episode is structured as a Quentin Tarantino homage, complete with non-linear storytelling.",
      "The title cards, camera angles, and dinner scene directly reference Reservoir Dogs and Pulp Fiction.",
      "This episode reveals Crowley's backstory with Ramiel, a Prince of Hell, significantly expanding demon mythology."
    ]}
  ],
  13: [
    { ep: 1, title: "Lost and Found", aired: "October 12, 2017", director: "Philip Sgriccia", facts: [
      "Alexander Calvert's portrayal of newborn-but-adult Jack Kline won over fans immediately.",
      "The Season 13 premiere had to establish Jack's character quickly while balancing an emotional aftermath.",
      "The opening scene of Jack's birth utilized more practical effects than any other birth scene in the series."
    ]},
    { ep: 16, title: "Scoobynatural", aired: "March 29, 2018", director: "Robert Singer", facts: [
      "Sam, Dean, and Castiel are transported into an actual Scooby-Doo cartoon episode.",
      "The animation was produced by Warner Bros. Animation, the same studio behind the original Scooby-Doo series.",
      "Jensen, Jared, and Misha recorded their lines while watching the animated scenes to match timing.",
      "This crossover was five years in the making — Jensen Ackles first pitched the idea in 2013.",
      "The Scooby gang's reaction to learning that ghosts are real and can actually kill people is played for both comedy and genuine horror."
    ]},
    { ep: 23, title: "Let the Good Times Roll", aired: "May 17, 2018", director: "Robert Singer", facts: [
      "Dean saying yes to Michael in the season finale was a callback to the Season 5 vessel storyline.",
      "The Apocalypse World Michael fight scene used wire work that Jensen Ackles performed himself.",
      "Lucifer's final death at Dean/Michael's hands closed a villain arc spanning 10 seasons."
    ]}
  ],
  14: [
    { ep: 1, title: "Stranger in a Strange Land", aired: "October 11, 2018", director: "Thomas J. Wright", facts: [
      "Jensen Ackles wore a newsboy cap as Michael — a wardrobe choice he made himself to distinguish the character.",
      "The season premiere explored what a fully-powered archangel could accomplish, which the show had never shown.",
      "The episode's title is from Robert A. Heinlein's classic science fiction novel."
    ]},
    { ep: 10, title: "Nihilism", aired: "January 17, 2019", director: "Amanda Tapping", facts: [
      "The bar loop inside Dean's mind — Rocky's Bar — was Jensen Ackles' concept for Dean's happy place.",
      "Amanda Tapping, famous for playing Samantha Carter on Stargate SG-1, directed this episode.",
      "The mind-invasion sequence required building an entirely new bar set that was only used for this episode."
    ]},
    { ep: 13, title: "Lebanon", aired: "February 7, 2019", director: "Robert Singer", facts: [
      "This was the 300th episode of Supernatural, making it one of the longest-running sci-fi/fantasy shows in US history.",
      "Jeffrey Dean Morgan returned as John Winchester for the first time since Season 2.",
      "The Winchester family dinner scene — with John, Mary, Sam, and Dean together — was the first time all four were at a table since the pilot.",
      "Jensen Ackles and Jared Padalecki both cried during filming of the goodbye scene."
    ]}
  ],
  15: [
    { ep: 1, title: "Back and to the Future", aired: "October 10, 2019", director: "John Showalter", facts: [
      "The final season premiere features every soul escaping from Hell — the largest VFX sequence in the show's history.",
      "The title is a reference to the JFK assassination conspiracy phrase and the Back to the Future films.",
      "The zombie horde was made up of 80 extras in full prosthetic makeup."
    ]},
    { ep: 4, title: "Atomic Monsters", aired: "October 31, 2019", director: "Jensen Ackles", facts: [
      "This episode was directed by Jensen Ackles, who also starred in it.",
      "The opening sequence showing Sam as a villain in an alternate timeline was Jensen's directorial vision.",
      "Chuck is shown writing and deleting alternate endings for the Winchesters, foreshadowing the season's themes."
    ]},
    { ep: 13, title: "Destiny's Child", aired: "March 23, 2020", director: "Amyn Kaderali", facts: [
      "The alternate universe Sam and Dean who drive a Fiat and wear pastel clothes were an instant fan favorite.",
      "This was one of the last episodes filmed before COVID-19 shut down production in March 2020.",
      "The episode's humor provided levity before the show's darker final stretch."
    ]},
    { ep: 18, title: "Despair", aired: "November 5, 2020", director: "Richard Speight Jr.", facts: [
      "Castiel's confession to Dean and subsequent sacrifice trended worldwide on social media.",
      "Misha Collins has said this was the most emotionally challenging scene he filmed in 12 years on the show.",
      "The episode aired on election night 2020 in the US, leading to surreal social media trends mixing politics and Supernatural.",
      "Castiel's death was reshoot after COVID — the original version was slightly different."
    ]},
    { ep: 19, title: "Inherit the Earth", aired: "November 12, 2020", director: "Robert Singer", facts: [
      "The penultimate episode features the defeat of Chuck/God, ending the cosmic villain arc.",
      "Jack becoming the new God was foreshadowed as early as Season 13.",
      "The empty world sequences were filmed during COVID protocols, which accidentally helped the eerie abandoned feel."
    ]},
    { ep: 20, title: "Carry On", aired: "November 19, 2020", director: "Robert Singer", facts: [
      "The series finale aired after 15 years and 327 episodes, making it one of the longest-running genre shows ever.",
      "Dean's death on a routine vampire hunt was a deliberate choice to show that any hunt can be the last.",
      "The bridge where Sam and Dean reunite in Heaven was filmed at the same location used in the pilot.",
      "Jensen Ackles cried so hard during the death scene that filming had to pause multiple times.",
      "'Carry On Wayward Son' by Kansas plays during the final montage — it had been the show's unofficial anthem since Season 1.",
      "The finale was watched by over 2 million viewers, with the live audience being the show's largest in years."
    ]}
  ]
};

// Episode counts per season for populating dropdowns
var SEASON_EPISODE_COUNTS = {
  1: 22, 2: 22, 3: 16, 4: 22, 5: 22, 6: 22, 7: 23,
  8: 23, 9: 23, 10: 23, 11: 23, 12: 23, 13: 23, 14: 20, 15: 20
};

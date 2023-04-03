package com.bnta.capstone_backEndAPI.Components;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.bnta.capstone_backEndAPI.Models.Cast;
import com.bnta.capstone_backEndAPI.Models.GenreEnum;
import com.bnta.capstone_backEndAPI.Models.LanguageEnum;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Repositories.CastRepository;
import com.bnta.capstone_backEndAPI.Repositories.MovieCastMemberRepository;
import com.bnta.capstone_backEndAPI.Repositories.MovieRepository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private CastRepository castRepository;

    @Autowired
    private MovieCastMemberRepository movieCastMemberRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // ACTION
        Movie movie1 = new Movie("John Wick 4", 169, LanguageEnum.ENGLISH, GenreEnum.ACTION, "Incredible performances, stunning cinematography.", 3, "https://www.youtube.com/embed/yjRHZEUamCc");
        Movie movie2 = new Movie("Avatar The Way of Water", 192, LanguageEnum.ENGLISH, GenreEnum.ACTION, "Page-turner, couldn't put it down.", 4, "https://www.youtube.com/embed/d9MyW72ELq0");
        Movie movie3 = new Movie("Fast and Furious 5", 130, LanguageEnum.ENGLISH, GenreEnum.ACTION, "Thought-provoking and emotionally resonant.", 4,"https://www.youtube.com/embed/OqjeOYeG5_A");
        Movie movie4 = new Movie("The Dark Knight", 152, LanguageEnum.ENGLISH, GenreEnum.ACTION, "Engaging and thoroughly entertaining throughout.", 5,"https://www.youtube.com/embed/TQfATDZY5Y4");
        Movie movie5 = new Movie("Top Gun Maverick", 131, LanguageEnum.ENGLISH, GenreEnum.ACTION, "Masterful storytelling, beautifully crafted.", 3,"https://www.youtube.com/embed/giXco2jaZ_4");

        Cast cast1 = new Cast("Keanu Reeves", 58, "Keanu Reeves, a versatile actor born in Beirut in 1964, gained fame for roles in The Matrix, John Wick, and Bill & Ted. Known for his humility and philanthropy, he captivates fans worldwide.");
        Cast cast2 = new Cast("Lance Reddick", 61, "Lance Reddick is a versatile actor known for his commanding presence on screen, spanning television, film, and video games.");
        Cast cast3 = new Cast("Sam Worthington", 46, "Sam Worthington is an Australian actor who has starred in blockbuster films, independent projects, and stage productions throughout his career.");
        Cast cast4 = new Cast("Zoe Saldana", 44, "Zoe Saldana is a versatile actress known for her performances in major film franchises, including Avatar, Star Trek, and Guardians of the Galaxy.");
        Cast cast5 = new Cast("Vin Diesel", 55, "Vin Diesel is an actor, producer, and director known for his roles in action films, including the Fast and Furious franchise and Pitch Black.");
        Cast cast6 = new Cast("Paul Walker", 40, "Paul Walker was an actor known for his roles in films such as the Fast and Furious franchise, She's All That, and Pleasantville.");
        Cast cast7 = new Cast("Christian Bale", 49, "Christian Bale is a highly acclaimed actor known for his intense and transformative performances in films such as The Dark Knight and American Psycho.");
        Cast cast8 = new Cast("Heath Ledger", 28, "Heath Ledger was an actor known for his dynamic and captivating performances in films such as The Dark Knight, Brokeback Mountain, and 10 Things I Hate About You.");
        Cast cast9 = new Cast("Tom Cruise", 60, "Tom Cruise is a Hollywood icon known for his roles in blockbuster films such as Top Gun, Mission: Impossible, and Jerry Maguire.");
        Cast cast10 = new Cast("Jennifer Connelly", 52, "Jennifer Connelly is an Academy Award-winning actress known for her roles in films such as A Beautiful Mind, Requiem for a Dream, and Labyrinth");

        MovieCastMember movieCastMember1 = new MovieCastMember(cast1, movie1);
        MovieCastMember movieCastMember2 = new MovieCastMember(cast2, movie1);
        MovieCastMember movieCastMember3 = new MovieCastMember(cast3, movie2);
        MovieCastMember movieCastMember4 = new MovieCastMember(cast4, movie2);
        MovieCastMember movieCastMember5 = new MovieCastMember(cast5, movie3);
        MovieCastMember movieCastMember6 = new MovieCastMember(cast6, movie3);
        MovieCastMember movieCastMember7 = new MovieCastMember(cast7, movie4);
        MovieCastMember movieCastMember8 = new MovieCastMember(cast8, movie4);
        MovieCastMember movieCastMember9 = new MovieCastMember(cast9, movie5);
        MovieCastMember movieCastMember10 = new MovieCastMember(cast10, movie5);

        // TOP RATED
        Movie movie6 = new Movie("Succession", 26, LanguageEnum.ENGLISH, GenreEnum.TOP_RATED, "Sharp, witty, compelling, complex, riveting.", 4,"https://www.youtube.com/embed/OzYxJV_rmE8");
        Movie movie7 = new Movie("Cocaine Bear", 96, LanguageEnum.SPANISH, GenreEnum.TOP_RATED, "Darkly humorous, bizarre, captivating, unpredictable, entertaining.", 3,"https://www.youtube.com/embed/DuWEEKeJLMI");
        Movie movie8 = new Movie("Vikram", 174, LanguageEnum.TAMIL, GenreEnum.TOP_RATED, "Innovative, engaging, thrilling, emotional, action-packed.", 5,"https://www.youtube.com/embed/OKBMCL-frPU");
        Movie movie9 = new Movie("KGF 2", 26, LanguageEnum.KANNADA, GenreEnum.TOP_RATED, "Gripping, intense, visually stunning, powerful.", 4,"https://www.youtube.com/embed/JKa05nyUmuQ");
        Movie movie10 = new Movie("Modern Family", 23, LanguageEnum.ENGLISH, GenreEnum.TOP_RATED, "Heartwarming, hilarious, relatable, engaging, smart.", 4,"https://www.youtube.com/embed/X0lRjbrH-L8");

        Cast cast11 = new Cast("Brian Cox", 76, "Brian Cox, born in 1946, is a distinguished Scottish actor known for roles in Succession, X-Men 2, and Troy.");
        Cast cast12 = new Cast("Sarah Snook", 35, "Sarah Snook, born in 1987, is an Australian actress acclaimed for her roles in Succession, Predestination, and Steve Jobs.");
        Cast cast13 = new Cast("Ray Liotta", 68, "Ray Liotta, born in 1954, is a talented American actor celebrated for his roles in Goodfellas, Field of Dreams, and Narc.");
        Cast cast14 = new Cast("Keri Russell", 47, "Keri Russell, born in 1976, is an American actress known for her roles in Felicity, The Americans, and Waitress.");
        Cast cast15 = new Cast("Kamal Haasan", 68, "Kamal Haasan, born in 1954, is a renowned Indian actor, director, and producer known for Nayakan, Indian, and Vishwaroopam.");
        Cast cast16 = new Cast("Vijay Sethupathi", 45, "Vijay Sethupathi, born in 1978, is a versatile Indian actor famous for roles in Super Deluxe, 96, and Vikram Vedha.");
        Cast cast17 = new Cast("Yash", 37, "Yash, born in 1986, is a celebrated Indian actor known for his Kannada films, including KGF, Mr. atress celebrated for her roles in Modern Family, Boston Legal, and Happy Gilmore.");
        Cast cast18 = new Cast("Srinidhi Shetty", 30, "Srinidhi Shetty, born in 1992, is an Indian actress and model recognized for her roles in KGF and KGF: Chapter 2.");
        Cast cast19 = new Cast("Julie Bowen", 53, "Julie Bowen, born in 1970, is an American actress celebrated for her roles in Modern Family, Boston Legal, and Happy Gilmore.");
        Cast cast20 = new Cast("Sarah Hyland", 32, "Sarah Hyland, born in 1990, is an American actress known for her roles in Modern Family, Vampire Academy, and Geek Charming.");

        MovieCastMember movieCastMember11 = new MovieCastMember(cast11, movie6);
        MovieCastMember movieCastMember12 = new MovieCastMember(cast12, movie6);
        MovieCastMember movieCastMember13 = new MovieCastMember(cast13, movie7);
        MovieCastMember movieCastMember14 = new MovieCastMember(cast14, movie7);
        MovieCastMember movieCastMember15 = new MovieCastMember(cast15, movie8);
        MovieCastMember movieCastMember16 = new MovieCastMember(cast16, movie8);
        MovieCastMember movieCastMember17 = new MovieCastMember(cast17, movie9);
        MovieCastMember movieCastMember18 = new MovieCastMember(cast18, movie9);
        MovieCastMember movieCastMember19 = new MovieCastMember(cast19, movie10);
        MovieCastMember movieCastMember20 = new MovieCastMember(cast20, movie10);

        // COMEDY
        Movie movie11 = new Movie("Coming 2 America", 169, LanguageEnum.ENGLISH.SPANISH.GERMAN.FRENCH, GenreEnum.COMEDY, "Charming", 4,"https://www.youtube.com/embed/sY8gUtyeAKE");
        Movie movie12 = new Movie("Red Notice", 118, LanguageEnum.ENGLISH.SPANISH, GenreEnum.COMEDY, "Entertaining", 4,"https://www.youtube.com/embed/Pj0wz7zu3Ms");
        Movie movie13 = new Movie("The French Dispatch", 108, LanguageEnum.ENGLISH.FRENCH, GenreEnum.COMEDY, "Quirky", 4,"https://www.youtube.com/embed/TcPk2p0Zaw4");
        Movie movie14 = new Movie("Jolt", 91, LanguageEnum.ENGLISH, GenreEnum.COMEDY, "Action-Packed", 3,"https://www.youtube.com/embed/3BSSoD73TSk");
        Movie movie15 = new Movie("Thunder Force", 107, LanguageEnum.ENGLISH, GenreEnum.COMEDY, "Silly", 3,"https://www.youtube.com/embed/qnx6-YLXFwg");

        Cast cast21 = new Cast("Eddie Murphy", 60, "An iconic comedian and actor known for his roles in Beverly Hills Cop, The Nutty Professor and Shrek.");
        Cast cast22 = new Cast("Arsenio Hal", 65, "A multi-talented comedian, actor, and talk show host who has appeared in films like Harlem Nights and Coming to America.");
        Cast cast23 = new Cast("Dwayne Johnson", 50, "A former professional wrestler turned actor known for his roles in The Fast and the Furious franchise, Jumanji and Moana.");
        Cast cast24 = new Cast("Gal Gadot", 36, "An Israeli actress and model known for her roles in Wonder Woman, Batman v Superman and Justice League.");
        Cast cast25 = new Cast("Bill Murray", 71, "A comedic actor known for his roles in Ghostbusters, Lost in Translation and Caddyshack.");
        Cast cast26 = new Cast("Tilda Swinton", 26, "A British actress known for roles in We Need To Talk About Kevin, Doctor Strange and Snowpiercer.");
        Cast cast27 = new Cast("Kate Beckinsale", 48, "A British actress known for her roles in Underworld, Pearl Harbor and Love & Friendship. ");
        Cast cast28 = new Cast("Jai Courtney", 35, "An Australian actor known for his roles in Terminator Genisys, Suicide Squad and Divergent ");
        Cast cast29 = new Cast("Melissa McCarthy", 51, "An American actress known for her roles in Bridesmaids, The Heat and Spy ");
        Cast cast30 = new Cast("Octavia Spencer", 51, "An American actress known for her roles in The Help, Hidden Figures and Ma ");

        MovieCastMember movieCastMember21 = new MovieCastMember(cast21, movie11);
        MovieCastMember movieCastMember22 = new MovieCastMember(cast22, movie11);
        MovieCastMember movieCastMember23 = new MovieCastMember(cast23, movie12);
        MovieCastMember movieCastMember24 = new MovieCastMember(cast24, movie12);
        MovieCastMember movieCastMember25 = new MovieCastMember(cast25, movie13);
        MovieCastMember movieCastMember26 = new MovieCastMember(cast26, movie13);
        MovieCastMember movieCastMember27 = new MovieCastMember(cast27, movie14);
        MovieCastMember movieCastMember28 = new MovieCastMember(cast28, movie14);
        MovieCastMember movieCastMember29 = new MovieCastMember(cast29, movie15);
        MovieCastMember movieCastMember30 = new MovieCastMember(cast30, movie15);

        // HORROR

        Movie movie16 = new Movie("Scream", 111, LanguageEnum.ENGLISH.SPANISH.KOREAN, GenreEnum.HORROR, "Excellent, classic, well-cast", 5,"https://www.youtube.com/embed/beToTslH17s");
        Movie movie17 = new Movie("The Conjuring", 112, LanguageEnum.ENGLISH.SPANISH.FRENCH.HINDI, GenreEnum.HORROR, "Terrifying, gripping", 5,"https://www.youtube.com/embed/k10ETZ41q5o");
        Movie movie18 = new Movie("Winnie The Pooh Blood & Honey", 111, LanguageEnum.ENGLISH, GenreEnum.HORROR, "Awful.", 1,"https://www.youtube.com/embed/W3E74j_xFtg");
        Movie movie19 = new Movie("The Orphanage", 97, LanguageEnum.SPANISH.ENGLISH, GenreEnum.HORROR, "Spine-Chilling", 5,"https://www.youtube.com/embed/UkuKtS-N1rM");
        Movie movie20 = new Movie("Bird Box", 124, LanguageEnum.ENGLISH.FRENCH.SPANISH.KOREAN, GenreEnum.HORROR, "Gripping, intense, touching.", 3,"https://www.youtube.com/embed/o2AsIXSh2xo");

        Cast cast31 = new Cast("Courtney Cox", 58, "Courtney Cox: American actress, producer & director. Known for 'Friends', 'Scream', and 'Cougar Town'. Philanthropist.");
        Cast cast32 = new Cast("Neve Campbell", 49, "Neve Campbell: Canadian actress. Known for 'Scream' franchise, 'Party of Five', and 'Wild Things'. Dancer. Advocate for mental health awareness.");
        Cast cast33 = new Cast("Vera Farmiga", 49, "Vera Farmiga: American actress & director. Known for 'The Conjuring' films, 'Up in the Air', 'Bates Motel'. Human rights activist.");
        Cast cast34 = new Cast("Patrick Wilson", 49, "Patrick Wilson: American actor & singer. Known for 'The Conjuring' films, 'Fargo', 'Watchmen'. Broadway star. Supports arts education.");
        Cast cast35 = new Cast("Nikolai Leon", 23, " Nikolai Leon is a British/Ukrainian actor born in London. Known for 'Winnie The Pooh: Blood & Honey','The Killing Tree', 'Alien Awakening' & 'Exit'");
        Cast cast36 = new Cast("Maria Taylor", 22, "Maria Taylor is an up-and-coming actor from Manchester, England. She will be making her film debut as the leading lady in 'Winnie the Pooh: Blood and Honey'. ");
        Cast cast37 = new Cast("María Belén Rueda", 58, "María Belén Rueda García-Porrero is a Spanish actress. She is best known for her roles as Lucía in the TV series Los Serrano, as Julia in The Sea Inside, and as Laura in The Orphanage");
        Cast cast38 = new Cast("Fernando Cayo", 54, "Fernando Cayo was born on 22 April 1968 in Valladolid, Valladolid, Castilla y León, Spain. He is an actor and writer, known for The Orphanage, Mi vida es el Cine and Money Heist");
        Cast cast39 = new Cast("Sandra Bullock", 58, "Sandra Bullock: American actress & producer. Known for 'Gravity', 'The Blind Side', 'Miss Congeniality'. Advocate for human rights & education.");
        Cast cast40 = new Cast("Sarah Paulson", 48, "Sarah Paulson: American actress. Known for 'American Horror Story', 'The People v. O.J. Simpson', 'Carol'. LGBTQ+ rights activist.");

        MovieCastMember movieCastMember31 = new MovieCastMember(cast31, movie16);
        MovieCastMember movieCastMember32 = new MovieCastMember(cast32, movie16);
        MovieCastMember movieCastMember33 = new MovieCastMember(cast33, movie17);
        MovieCastMember movieCastMember34 = new MovieCastMember(cast34, movie17);
        MovieCastMember movieCastMember35 = new MovieCastMember(cast35, movie18);
        MovieCastMember movieCastMember36 = new MovieCastMember(cast36, movie18);
        MovieCastMember movieCastMember37 = new MovieCastMember(cast37, movie19);
        MovieCastMember movieCastMember38 = new MovieCastMember(cast38, movie19);
        MovieCastMember movieCastMember39 = new MovieCastMember(cast39, movie20);
        MovieCastMember movieCastMember40 = new MovieCastMember(cast40, movie20);


        // DOCUMENTARIES -
        Movie movie21 = new Movie("The Last Dance", 500,LanguageEnum.ENGLISH,GenreEnum.DOCUMENTARIES,"Feel-Good",5,"https://www.youtube.com/embed/JQk2hJs2ToA");
        Movie movie22 = new Movie("Tiger King", 350,LanguageEnum.ENGLISH,GenreEnum.DOCUMENTARIES,"Provocative, Investigative",3,"https://www.youtube.com/embed/acTdxsoa428");
        Movie movie23 = new Movie("I AM BOLT", 117,LanguageEnum.ENGLISH,GenreEnum.DOCUMENTARIES,"Feel-Good, Exciting",3,"https://www.youtube.com/embed/XVje1n8K240");
        Movie movie24 = new Movie("Harry & Meghan", 360,LanguageEnum.ENGLISH,GenreEnum.DOCUMENTARIES,"Investigative, Intimate",2,"https://www.youtube.com/embed/2rlVhiXlcHU");
        Movie movie25 = new Movie("Stutz", 96,LanguageEnum.ENGLISH,GenreEnum.DOCUMENTARIES,"Inspiring, Intimate, Heartfelt",4,"https://www.youtube.com/embed/UKCmefQdplI");


        Cast cast41 = new Cast("Michael Jordan",60, "Michael Jordan is a retired American professional basketball player and businessman. He was born on February 17, 1963, in Brooklyn, New York, and grew up in Wilmington, North Carolina." );
        Cast cast42 = new Cast("Joe Exotic", 60, "Joe Exotic: former zoo owner, convicted felon, central figure in Tiger King documentary, known for his eccentric personality and rivalry with Carole Baskin.");
        Cast cast43 = new Cast("Carole Baskin", 61, "Carole Baskin: animal rights activist, founder of Big Cat Rescue, central figure in Tiger King documentary, controversial figure in the big cat industry.");
        Cast cast44 = new Cast("Usain Bolt", 36, "Usain Bolt: Jamaican former sprinter, 8-time Olympic gold medalist, 11-time world champion, and world record holder in 100m and 200m sprints.");
        Cast cast45 = new Cast("Prince Harry", 38, "Prince Harry: Duke of Sussex, British royal, military veteran, philanthropist, and advocate for mental health, wildlife conservation, and veterans' rights. ");
        Cast cast46 = new Cast("Meghan Markle", 41, "Meghan Markle: Duchess of Sussex, former actress, activist, and advocate for women's rights, gender equality, and mental health awareness. ");
        Cast cast47 = new Cast("Phil Stutz", 76, "Phil Stutz: psychotherapist, author, co-creator of The Tools, a self-help method, and consultant to top performers in entertainment and sports. ");
        Cast cast48 = new Cast("Jonah Hill", 39, "Jonah Hill: American actor, director, producer, and screenwriter known for his roles in Superbad, Moneyball, The Wolf of Wall Street, and Mid90s. ");

        MovieCastMember movieCastMember41 = new MovieCastMember(cast41, movie21);
        MovieCastMember movieCastMember42 = new MovieCastMember(cast42, movie22);
        MovieCastMember movieCastMember43 = new MovieCastMember(cast43, movie22);
        MovieCastMember movieCastMember44 = new MovieCastMember(cast44, movie23);
        MovieCastMember movieCastMember45 = new MovieCastMember(cast45, movie24);
        MovieCastMember movieCastMember46 = new MovieCastMember(cast46, movie24);
        MovieCastMember movieCastMember47 = new MovieCastMember(cast47, movie25);
        MovieCastMember movieCastMember48 = new MovieCastMember(cast48, movie25);

        // BLOCKBUSTER ORIGINALS

        Movie movie26 = new Movie("Wednesday", 28, LanguageEnum.ENGLISH, GenreEnum.ORIGINALS, "Witty, morbid, captivating", 3,"https://www.youtube.com/embed/Di310WS8zLk");
        Movie movie27 = new Movie("Creed 3", 117, LanguageEnum.ENGLISH, GenreEnum.ORIGINALS, "Inspiring", 8,"https://www.youtube.com/embed/AHmCH7iB_IM");
        Movie movie28 = new Movie("Run", 89, LanguageEnum.ENGLISH, GenreEnum.ORIGINALS, "Thrilling", 4,"https://www.youtube.com/embed/EoGojQE4p-8");
        Movie movie29 = new Movie("Fall",106, LanguageEnum.ENGLISH, GenreEnum.ORIGINALS, "Explosive, suspenseful.", 4,"https://www.youtube.com/embed/iSspRSGc4Dk");
        Movie movie30 = new Movie("Luther The Fallen Sun", 130, LanguageEnum.ENGLISH.SPANISH, GenreEnum.ORIGINALS, "Ominous, gritty, dark.", 5,"https://www.youtube.com/embed/EGK5qtXuc1Q");

        Cast cast49 = new Cast("Jenna Ortega", 20, "Jenna Ortega, born in 2002, is an American actress known for Stuck in the Middle, You, and Wednesday");
        Cast cast50 = new Cast("Christina Ricci", 43, "Christina Ricci, born in 1980, is an American actress celebrated for roles in The Addams Family, Casper, and Sleepy Hollow.");
        Cast cast51 = new Cast("Michael B Jordan", 36, "American actor and producer, known for roles in Creed, Black Panther, and Fruitvale Station " );
        Cast cast52 = new Cast("Jonathan Majors", 33, "American actor, known for roles in Lovecraft Country, The Last Black Man in San Francisco, and Da 5 Bloods." );
        Cast cast53 = new Cast("Kiera Allen", 25, "Kiera Allen is a talented actress known for her captivating performances in movies like Run and Ethan and Sophie." );
        Cast cast54 = new Cast("Grace Caroline Currey", 32, "Grace Caroline Currey is a rising actress and model known for her work in projects like Lucifer, S.W.A.T, and Bizaardvark.");
        Cast cast55 = new Cast("Virginia Gardner", 35, "Virginia Gardner is an American actress best known for her roles in Marvel's Runaways, Project Almanac, and Halloween.");
        Cast cast56 = new Cast("Idris Elba",50 , "Idris Elba is a multi-talented British actor, producer, and musician, known for his work in Luther, The Wire, Thor, and Mandela: Long Walk to Freedom.");
        Cast cast57 = new Cast("Cynthia Erivo", 36, "Cynthia Erivo is a Tony, Emmy, and Grammy award-winning actress and singer, known for her performances in Harriet, The Color Purple, and Genius.");


        MovieCastMember movieCastMember49 = new MovieCastMember(cast49, movie26);
        MovieCastMember movieCastMember50 = new MovieCastMember(cast50, movie26);
        MovieCastMember movieCastMember51 = new MovieCastMember(cast51, movie27);
        MovieCastMember movieCastMember52 = new MovieCastMember(cast52, movie27);
        MovieCastMember movieCastMember53 = new MovieCastMember(cast53, movie28);
        MovieCastMember movieCastMember54 = new MovieCastMember(cast40, movie28);
        MovieCastMember movieCastMember55 = new MovieCastMember(cast54, movie29);
        MovieCastMember movieCastMember56 = new MovieCastMember(cast55, movie29);
        MovieCastMember movieCastMember57 = new MovieCastMember(cast56, movie30);
        MovieCastMember movieCastMember58 = new MovieCastMember(cast57, movie30);


        // Saves all Movies
        movieRepository.saveAll(Arrays.asList(
                movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10,
                movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20,
                movie21, movie22, movie23, movie24, movie25, movie26, movie27, movie28, movie29, movie30
        ));


        // Saves all Casts
        castRepository.saveAll(Arrays.asList(
                cast1, cast2, cast3, cast4, cast5, cast6, cast7, cast8, cast9, cast10,
                cast11, cast12, cast13, cast14, cast15, cast16, cast17, cast18, cast19, cast20,
                cast21, cast22, cast23, cast24, cast25, cast26, cast27, cast28, cast29, cast30,
                cast31, cast32, cast33, cast34, cast35, cast36, cast37, cast38, cast39, cast40,
                cast41, cast42, cast43, cast44, cast45, cast46, cast47, cast48, cast49, cast50,
                cast51, cast52, cast53, cast54, cast55, cast56, cast57
        ));

        // Saves all movieCastMembers

        movieCastMemberRepository.saveAll(Arrays.asList(
                movieCastMember1, movieCastMember2, movieCastMember3, movieCastMember4, movieCastMember5, movieCastMember6,
                movieCastMember7, movieCastMember8, movieCastMember9, movieCastMember10, movieCastMember11, movieCastMember12,
                movieCastMember13, movieCastMember14, movieCastMember15, movieCastMember16, movieCastMember17, movieCastMember18,
                movieCastMember19, movieCastMember20, movieCastMember21, movieCastMember22, movieCastMember23, movieCastMember24,
                movieCastMember25, movieCastMember26, movieCastMember27, movieCastMember28, movieCastMember29, movieCastMember30,
                movieCastMember31, movieCastMember32, movieCastMember33, movieCastMember34, movieCastMember35, movieCastMember36,
                movieCastMember37, movieCastMember38, movieCastMember39, movieCastMember40, movieCastMember41, movieCastMember42,
                movieCastMember43, movieCastMember44, movieCastMember45, movieCastMember46, movieCastMember47, movieCastMember48,
                movieCastMember49, movieCastMember50, movieCastMember51, movieCastMember52, movieCastMember53, movieCastMember54,
                movieCastMember55, movieCastMember56, movieCastMember57, movieCastMember58
        ));

    }
}


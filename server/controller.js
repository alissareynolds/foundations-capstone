require('dotenv').config();

const { CONNECTION_STRING } = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(CONNECTION_STRING);

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists favorites;
        drop table if exists pictures;
        drop table if exists users;
        drop table if exists animals;
        drop table if exists species;
        

        CREATE TABLE species (
            species_id SERIAL PRIMARY KEY, 
            species_name VARCHAR (100) NOT NULL
        );

        CREATE TABLE animals (
            animal_id SERIAL PRIMARY KEY,
            name VARCHAR (64), 
            gender VARCHAR (20) NOT NULL,
            breed VARCHAR (80) NOT NULL, 
            birthdate VARCHAR (60) NOT NULL,
            thumbnail VARCHAR (200) NOT NULL,
            height VARCHAR (60), 
            color VARCHAR (80),
            weight VARCHAR (60),
            info VARCHAR (50000) NOT NULL,
            pictures VARCHAR (255),
            species_id INT REFERENCES species(species_id)
        );

        CREATE TABLE pictures (
            picture_id SERIAL PRIMARY KEY, 
            url VARCHAR (200) NOT NULL,
            animal_id INT REFERENCES animals(animal_id)
        );

        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY, 
            first_name VARCHAR (64) NOT NULL,
            username VARCHAR (64) NOT NULL
        );

        CREATE TABLE favorites (
            animal_id int NOT NULL,
            user_id int NOT NULL,
            CONSTRAINT PK_animal_user PRIMARY KEY(animal_id, user_id),
            CONSTRAINT FK_animal_user_animal_id FOREIGN KEY(animal_id) REFERENCES animals(animal_id),
            CONSTRAINT FK_animal_user_user_id FOREIGN KEY(user_id) REFERENCES users(user_id)
        );
        
        INSERT INTO species (species_name)
        VALUES 
        ('Dog'), 
        ('Cat'), 
        ('Horse');

        INSERT INTO animals (name, gender, breed, birthdate, thumbnail, height, color, weight, info, species_id)
        VALUES 
        ('Jeffery', 'male', 'Labrador Retriever', '09/21/2022', '/images/jeffery.png', null, null, null, 'Who does not love a class clown. The kid silly enough to make sure you enjoy all their antics. The one who will always make you smile and will probably get you to laugh too. That is  Jeffrey! This boy is super sweet and an absolute riot! He is goofy and fun in true lab fashion and we know his funny personality is going to make you giggle just as much as we are. If a silly personality is not enough to win you over he has the most beautiful eyes and is incredibly affectionate too. Basically the perfect dog to entertain you on the most boring of days! Jeffery was not always our favorite class clown. He sadly found himself at the city shelter. Alone and unwanted he was one of dozens of juvenile pups hoping to get noticed. The ''teen'' aged dogs have it pretty bad right now. They are one of the biggest groups of dogs both surrendered and abandoned at shelters nationwide. No one seems to want them and shelters are drowning in these juvenile dogs who just want their chance at life. Sadly these young dogs often have minimal training and no manners to speak of and this hurts their chances at adoption even more. Jeffery''s fun personality has guaranteed he is getting his chance. We can make sure he gets the training he needs and showcase his silliness so just the right people notice. We are not the only  humans who love a goofy pup. If you like the silly ones too apply to make Jeffery part of your fun loving family.', 1), 

        ('Bailey', 'female', 'Pit Bull', '10/11/2014', '/images/bailey.jpg', null, null, null, 'Even older dogs can learn new tricks and sweet sweet Bailey is going to show you how it is done! This girl is spry, active and will probably show all the younger pups up on her Pawsitive Change journey. We know she is going to succeed and we know she is going to make a ton of friends along the way. Who does not love an adorable senior land hippo. We know we do and Baileys had some pretty amazing humans in her corner on her rescue journey. As a senior dog and pitbull Bailey had very little chance of making it out of the high volume Carson shelter alive. She was not going to stand out in the sea of younger dogs also vying for homes. But she had a Guardian Angel working on her release. Senior pups in shelters is almost always a death sentence. For unknown reasons Bailey was surrendered by her family after giving them her loyalty for 9 years. 9 years almost thrown away but we are so thankful for kind humans and networking cause Bailey got her big break. Bailey has joined the crew going into North Kern State Prison. With her awesome people and dog to dog skills she is going to teach those young pups a few things. During her 3 month program she will be looking for the perfect family to live out her retirement years. A family with no cats or small animals who will cherish her the way her 1st family should have. If you love the kindness a senior dog brings to a home please consider giving Bailey her forever.', 1), 

        ('Gideon', 'male', 'German Shepherd', '09/08/2017', '/images/gideon.png', null, null, null, 'A family of three was very loyal indeed. We would expect nothing less from a German Shepherd. Gideon, Gracie and Griffen are the steadfast  protectors you never knew you needed. Devoted until the end that is  what we love most about this breed. They have the resilience to overcome and the steadfast presence to persevere. They are strong, proud and absolutely beautiful. To know a shepherd is to love everything they were bred to be and these three are wonderful examples of why German Shepherds are so beloved. This family has shown incredible heart and amazing forgiveness for the life of neglect they once led. Abandoned by their humans when those humans were evicted. They were literally left to fend for themselves in a fenced in backyard with no access to food or water in the middle of summer. They were thin, flea infested and had a myriad of skin issues. Their previous family had provided them with minimal care and they held so little value they were left behind like trash. They could have died in that backyard but we are so thankful Good Samaritans exist. The kindness of one human is what kept these dogs alive. Food and water was provided daily for weeks and that human started networking these dogs to find them the help they needed most…rescue. That is  where we stepped in. We had the space, the resources and the time to get these dogs healthy enough for adoption. This family has shown their appreciation for their rescue with endless devotion to each of their rescuers. They are incredibly sweet and so thankful for everything they have been given. Gideon, the father, is a mature gentleman who wears his previous hard life on his exterior. He walks nicely on leash and is gentle, affectionate and just a bit timid in new situations. Gracie, the mom, loves to explore and smell all the things. She is a total sweetheart and a lover of all kinds of attention. Griffen, the puppy, is a highly trainable dude. He is learning how to be a puppy and working on basic manners and leash skills. All three get along beautifully but do not have to be adopted together. They will thrive in separate adoptive homes and are just so thankful to have their 2nd Chance.', 1), 

        ('Apollo', 'male', 'Belgian Malinois', '06/20/2017', '/images/apollo.png', null, null, null, 'Ok all you Malinois lovers we have a beautiful big boy for you! Meet Apollo! This boy is stunning! He was originally placed with another rescue group in the Lancaster area by his previous family. He lived with that rescue for several years. Sadly he was losing his rescue placement when the founder of that rescue passed away unexpectedly. Apollo needed placement quickly and we were happy to step up and help a fellow advocate. Apollo absolutely loves people. He really enjoys all actives that involve some one on one human contact and attention. We have  been giving him the time he needs to decompress. He lived with the other rescue for 5 years so moving to our ranch has been a significant change for him. Currently Apollo needs to be the only dog in the home while he continues to get his bearings. We would prefer a home with Mal experience but he lacks the working drive seen in most Mals. If you live the breed this boy just might be the one for you!', 1),

        ('Bette', 'female', 'Pug/Terrier', '02/02/2022', '/images/bette.png', null, null, null, 'Sugar and spice and everything nice. If you are looking for cute and looking for fun Bette just may be your #1! This little girl is a riot. Not only does she have the punk rock hair going on but she is literally the life of the party. She is got spunk and she is got sass and her 11lb body does not hold her back. She wants to play!!! And when we say play we mean she wants to play with everyone. Big dogs, small dogs and everything in between she is absolutely the playing queen. She is got hops for days, you have  never seen a small dog jump so high and if there is a game of ball or chase she is going to join right in. So much spunk in such a tiny package.Like so many other dogs Bette found herself at our city shelter. We are not sure why her family did not claim her but we absolutely had a foster spot for her. She settled in pretty quick and has been giving her foster siblings a run for their money. She will pester them for play and when she gets rough they have been showing her the ropes. A correction and a check is what all wild children need and Bette is learning the rules of an appropriate playtime routine. But play is not her only side she is also snuggly and sweet. She loves to be cuddled and will tuck herself right into your shoulder like she is hugging you. Her time in foster care is filled with lots of fun but we are also working on the skills she will need for adoption. She came to us with no house training manners. She quickly picked up on potty pads and her foster is working on transitioning that to outside potty time. She is super smart so we know she will get it, it will just take time and consistency. Bette''s future home should be willing to continue her house training routine and love a little bit of fun. Another playful dog would be a plus and we think she would do great with older respectful children. If you like sugar and spice and just a touch of sass consider making Bette part of your family. ', 1),

        ('Dodge', 'male', 'Siberian Husky', '09/04/2020', '/images/dodge.png', null, null, null, 'Dodge is full of husky antics. Dodge is full of husky fun! In true husky fashion he is going to make you laugh and pull your hair out all in one. You husky people you know what we are talking about. But what makes a active and enthusiastic husky a good husky? Well training of course! We gave Dodge purpose and the training he needed in our Pawsitive Change Prison program. Dodge just wants to play play play but good huskies know how to pair that play with a little sit, down and stay. Dodge learned all those skills plus more during his 3 month stay at N. Kern prison. He has amazing social skills with the fun and active dogs at the ranch and Pawsitive Change gave him the training foundation he needed to make him an even more amazing husky than he already is. 
        He is completed the program and is now looking for that perfect home. He would make a great adventure buddy and could totally keep up no matter where your adventures took you. He is super goofy and lots of fun (have we mentioned fun lol) and everything husky lovers love about the breed. A quiet uneventful home is not going to be his cup of tea as true to his husky nature he needs something to do otherwise he will get himself into trouble. He would not do well in a home with young children as their energy makes him nervous and he would do best with other fun dogs who think his husky enthusiasm is fabulous. He will need a family that continues to enforce the rules and boundaries he is learned in prison and he is more than ready to find all those things just needs his chance to shine!', 1),

        ('Troy', 'male', 'Chihuahua', '03/27/2023', '/images/troy.png', null, null, null, 'These adorable little nuggets were lucky enough to be born in rescue. Their sweet momma came into the shelter super duper pregnant but managed to wait until she was safe and in foster care before having her babies. 6 healthy pups have grown up in foster care learning all they need to know and getting ready for adoption. They are growing, learning and so much fun! They look a lot like their momma, Tabitha, and daddy is a mystery. These babies will stay small, momma is in the 12-15lb range, and will be ready for families in a few more short weeks. If you have  been looking for a little pup to add to your crew one of these cuties just might be the right fit for you!', 1),

        ('Edgar', 'male', 'Pomeranian', '05/26/2007', '/images/edgar.png', null, null, null, 'One exiting with adoption means there is room for another to take their place. Meet Edgar! This sweet old man was in kind of a pickle. He lived with an older couple and 16 other dogs. He was the father to those 16 dogs. The wife passed away and the husband lost the house. This left 16 dogs living in a truck with no AC. Thankfully many rescues stepped up and all the dogs found rescue placement. Edgar has been chilling with us while we have  completed his medical care. His teeth were terrible surprise surprise and every single one of them had to come out. He is now a little toothless wonder and happily munches on soft food completely content to have those rotten things out of his mouth. Unfortunately with his age and some complications while under anesthesia he is not able to be neutered (he is probably extra happy about that lol). We have  been working to get some irritation around his eyes cleared up and we suspect the irritation was caused from living outside in the elements. Edgar is a super sweet little old guy but in typical old man fashion he can get fiesty if he really does not like something. He is not a fan of other un-neutered dogs and pretty much hates the ointment we have to apply around his eyes. He is also a bit possessive of his food. But other than that he is happy go lucky and very spry for a pup his age. He is a sweet old man who would love nothing more than a soft place to lay and a kind family to call his own in his retirement years. Hes good with respectful dogs and children and pretty stinking cute with his frosted little face. If seniors touch your heart the way they touch ours consider giving this lovely old man an amazing forever home.', 1),

        ('Dottie', 'female', 'Carolina Dog', '12/02/2022', '/images/dottie.png', null, null, null, '3 legs has not held Dottie back! This little lady has the zest for life that we love!!!  Besides broken dogs are our jam. They help us show the world that different is beautiful and those differences do not have to be a disability. Dottie is the perfect type of dog to send into our Pawsitive Change Prison program. Not only does she have obedience training needs that can be worked on in prison but her positive adjustment to her differences will help her inmate handlers see that hard does not equal impossible and life can change with just a little work and a shift of perspective. Dottie''s journey has been filled with many bumps along the way. Much the same as these incarcerated individuals. She started out with 4 perfectly good legs. Sadly she was picked up by animal control with a leg so damaged it required amputation. Her former family did not keep her safe or secure and they did not even bother to look for her once she was out. She had no one in her corner. We cannot help but see how her story mirrors many of the handlers who will be working with her at Camp Kilpatrick. Dottie''s puppy energy and enthusiasm for life is infectious. But with all that fun comes the need for a few rules and boundaries. She will be learning everything she needs to know to grow into an amazing adult dog during her 3 month long prison stay. Once she is graduated we would love to see Dottie adopted into a fun loving and active home and would love for her to have an equally fun canine buddy to pal around with. Dotties almost ready to find her perfect match so get those applications in!', 1), 

        ('Mochi', 'female', 'Domestic Short Hair', '12/10/2020', '/images/mochi.png', null, null, null, 'Mochi is ready for her furever home. Mochi is an expert napper. She will capitalize on all of the best napping spots in the house! She is also enjoys being pet. Mochi gets along with humans of all ages and other cats. She would thrive in either a single or multi cat household. Her favorite beds are wicker caves with a fuzzy bed inside. She is spayed, microchipped, up to date on vaccinations, and FIV/FeLV negative.', 2), 
        
        ('Frisco', 'male', 'Domestic Short Hair', '03/15/2022', '/images/frisco.png', null, null, null, 'Frisco is ready for his furever home. Frisco is a resident couch potato. He is very affectionate and would love a human to cuddle with more often. He gets along with humans of all ages. He does great with other cats and would be happy in a single or multi cat house hold. He is neutered, microchipped, up to date on vaccinations, and FIV/FeLV negative.', 2), 
        
        ('Arby', 'male', 'Domestic Short Hair', '01/03/2017', '/images/arby.png', null, null, null, 'Arby is ready for his furever home. He is an affectionate young cat who loves head scratches and watching cat-tv. He is often shy when meeting new people but can be quite cuddly with his long term care takers. Arby gets along great with the other cats in his adoption room and would be happy in a single or multi cat household. Arby is gentle enough to be around children and would enjoy being someone''s reading buddy. He is neutered, microchipped, up to date on vaccinations, and FIV/FELV negative.', 2), 

        ('Yellowstone', 'male', 'Domestic Short Hair', '04/16/2016', '/images/yellowstone.png', null, null, null, 'Howdy, partner! This kitty is called Yellowstone and he is looking for someone to travel the trails with. Ready to saddle up? Yellowstone is a handsome cat who enjoys the simple things in life. A quiet home on the range—or the suburbs—would suit him just fine! He is been called a “purr-machine” who is affectionate with everyone he meets. He loves all the attention and the pets that come with making new friends at the dude ranch. Yellowstone is an older gentleman, so this is not his first rodeo! In his travels, he is learned just what he likes. Playtime? You bet! If you help him round up all the toys, he will have an epic play session with you. Once playtime is over, he will mosey on over to the couch with you and cuddle the night away!', 2),

        ('Oatmeal', 'male', 'Domestic Short Hair', '12/18/2020', '/images/oatmeal.png', null, null, null, 'Looking for a hearty and healthy way to start every day? You cannot go wrong with Oatmeal! Sweet and good for the heart describe Oatmeal perfectly. He is an independent gentleman with a heart of gold that is often happy to join you at the breakfast table for the most important meow of the day. He enjoys attention on his own terms, seeking out pets and gentle scratches whenever the mood strikes him. He is also a big fan of playtime and is learning to keep the play limited to his toys. As his name implies, Oatmeal is a big foodie and is never one to turn down a treat. Children might be new to Oatmeal and he prefers having all four paws on the floor and does not enjoy being picked up.', 2),

        ('Finley', 'male', 'Tabby', '02/15/2017', '/images/finley.png', null, null, null, 'Finley came into care the first time in 2019 after being found living on the streets. It was suspected that his owners moved and left him behind. The good Samaritan that found him was unable to keep him due to conflicts between him and their pets, so Cat Matchers stepped in and found him a foster home. Finley did not stay in the Cat Matcher system long and was adopted after only two months of being in foster care. His adopter recently reached out to Cat Matchers asking that we take him back as she is no longer able to care for him. So once again Finley is looking for a forever home where he can grow old and enjoy life with someone that loves him. Finley is a sweet big boy who loves attention and being close to his people. He will complain when he is alone too long. Finley enjoys playing with his toy mice and balls as well as finding new places to hide. He would prefer to be an only child and get all of your attention. Finley has a loud purr box that is soothing to the soul. Finley has a history of constipation which is treated with diet and making sure he has a water fountain to encourage him to drink more water.', 2), 

        ('Cali', 'male', 'Tabby/Domestic Short Hair', '03/25/2017', '/images/cali.png', null, null, null, 'Cali is ready for his furever home. He is an affectionate young cat who loves head scratches and watching cat-tv. He is often shy when meeting new people but can be quite cuddly with his long term care takers. Cali gets along great with the other cats in his adoption room and would be happy in a single or multi cat household. Cali is gentle enough to be around children and would enjoy being someone''s reading buddy. He is neutered, microchipped, up to date on vaccinations, and FIV/FELV negative.', 2), 

        ('Maggie', 'female', 'Domestic Short Hair', '05/28/2021', '/images/maggie.png', null, null, null, 'Maggie is ready for her furever home. Maggie and her siblings were rescued from a local grocery store. She is very playful, seeks attention, loves to cuddle, and will need to go to a home with another cat. She is good with dogs too but will only eat wet food. Maggie is a wonderful kitty who will purr when approached. She is also bonded with her sister Carol, and they must be adopted together. Maggie is up to date with her vaccines, combo tested (FIV/FELV), spayed, and microchipped.', 2),

        ('Scout', 'male', 'Domestic Short Hair', '01/13/2020', '/images/scout.png', null, null, null, 'Scout was found left in a box with his siblings when he was only 2 weeks old! He is a friendly, playful, and cuddly kitty that would love to find his forever home. He does well with other animals and would prefer to live with another cat. Scout is up to date with her vaccines, combo tested (FIV/FELV), spayed, and microchipped. He does well with children and is the perfect pet for those looking for their new best friend. Scout would be the perfect addition to any family.', 2), 

        ('Dakota', 'gelding', 'Mustang (Tribal/reservation)', '01/01/2009', '/images/dakota-thumbnail.jpg', '14.0 hh (est.)', 'Liver Chestnut Appaloosa', '950 lbs (est.)', 'Dakota came to Weatherford Animal Sanctuary in September 2021 from a distressed sanctuary. He ended up at the sanctuary after his loving owner developed terminal cancer. He is a handsome tribal mustang from the Dakotas. Dakota was fearful and lacked confidence, and he was difficult to catch. He was defensive in that if anyone approached from the side or behind too quickly, he would turn his hind end to you and on occasion, he kicked out. He learned quickly that was not ok. When we picked him up, he had extensive heel cracks that extended into his coronary band in both hind hooves. They were painful. Soon after arrival, he got the works, hoof and dental care, vaccines, deworming, and a microchip. During his exam our vet discovered he could not see out of his left eye. Further evaluation showed his lens was detached, which certainly explained his concerns with people approaching from the side or behind. With more understanding of his vision issue, we learned how to better support him. After he was moved to the herd, he became very herdbound and had a strong pullback issue when taking him away from his herdmates. With some changes, it is improved some, but it resurfaces when there are changes or his confidence wanes. Once he is one-on-one, he recovers nicely, but this is still a work in progress.  Dakota was introduced to a saddle, and he handled it very well.  He had occasional dips in his confidence, but they were more related to activity in his surroundings.  As we get settled into AAE''s new property, we will do more saddle work and work away from the herd.Dakota is a very sweet, social guy. He seeks attention and enjoys grooming and interaction. He is good with the vet and farrier. He loads fairly well, and travels fine. Dakota is current with dental and hoof care, vaccines, and deworming, and he has a microchip. Dakota is looking for an experienced horse person to continue building his confidence and enjoy the cool little guy he is. 
        In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3),

        ('Red', 'gelding', 'Grade', '2007 (est.)', '/images/red.png', '15.1 hh (est.)', 'Red Dun', '1,100 lbs (est.)', 'Many of you may remember the incredibly handsome Red. Red originally came to Weatherford Animal Sanctuary way back in the summer of 2015. He came from another rescue after spending several months at the Monty Roberts International Learning Center (MRILC) where he participated as a project horse during MRILC courses. He was completely untouchable when he arrived, and it took tremendous time to overcome fear and accept a simple touch by a human. Red has some deep-seated mistrust of humans, and he really did not want to be in a world with humans. With an immense amount of work, he tried hard to understand. He learned basic groundwork and long-lining, and he was introduced to a saddle (no rider). Red has received hoof and dental care, deworming, and vaccines. He spent several months with a foster interested in country riding, where he learned more extensive groundwork, and he was exposed to a variety of objects and activities, but his foster never felt Red developed enough confidence to become the horse he needed. Red came back to the rescue. Several months later, Red was adopted by a young man in Fall of 2016. Red continued building trust and learning about saddle work, even carrying his young rider a few times. However, due to the realities of work and finances that come with adulthood, his young adopter was unable to continue to meet Red''s needs. Sadly, Red sat in his pasture with other horses and no significant human attention for many months before we were called to pick him up in January 2018. Red had regressed, and much of the progress he would made was gone. None of Red''s vet care had been maintained, so all was updated again including dental and hoof care, vaccines, and deworming, and he got a microchip, too. Back at our rescue for only about a month, Red suffered a pasture accident rupturing his peroneus teritius tendon. This usually happens when the hock is hyperextended, likely in a quick turn or change of direction. Thankfully, it was a soft tissue injury, and not the ghastly fracture it appeared to be. Red was on stall rest for more than a year and appears to have heal well. Research shows a good percentage of horses recover to the same level of exercise, and he appears to be back to his normal. 
        Fast forward to 2020, after many months of daily interaction, Red was again making slow, but great progress, building confidence, and really seeming like he was beginning to enjoy humans. Red was again adopted in November 2020.  This time, his human was interested only in liberty work and a horse she could bring along to whatever he wanted to be. By the end of 2021, we learned Red was let down again. His person wanted more than Red could give, and she could not understand him enough to continue to build his confidence. He lived at a boarding facility in his own paddock, though he was surrounded by horses, he had horse contact, no horseplay. Red came back to us a third time in January 2022. Again, his health care had not been maintained, and he came back with some new learned behavior including rearing and pulling back to breakaway from pressure. He would spin, turn, and bolt. His confidence was shattered, and his willingness to try diminished. Red had been failed again. Since back at our rescue, his health care was updated again including hoof and dental care, vaccines, and deworming. Red has spent many months in pasture being a horse. He is reconnecting with other horses, and we are finally starting to see the Red we knew a few years ago. He comes in regularly for hoof care, and his confidence with humans is creeping forward again. 
        Red is one of those horses you really wish you could know what happened to him to understand is deep mistrust of humans. He has such a kind soul and an enormous heart. He tries so very hard to be brave and vulnerable, but he just cannot. First contact with him is like 50 first dates...or 1,593,625 first dates by now. Once he is been touched, he is relatively easy to halter, but it still takes a slow approach and ongoing assurance.  Once he is haltered, he also seems to appreciate grooming and just plain quiet time. Red does best with a very calm, confident, and patient person, someone experienced with trust-building in feral/wild horses. He is slowly moving forward, and we will continue his journey. For future adoption, the best home for him with be with a person that wants the best for him, has no agenda for riding or anything but forging a strong relationship, keeping Red health and happy, and becoming Red''s best friend. Most likely, that will be a non-riding home with another horse or with a person that wants to spend endless time with this guy allowing him to cross-over into the human world at his pace. Of course, there is always the possibility he never will, but with the right connection and bond, anything is possible. Red would do best with a very experienced, and confident handler. He is sweet, smart, and honest; however he is reactive and perpetually snorty. He is always respectful of his handler''s space. He does best when handled in a calm, matter of fact way. If he is in a large space, he is usually looking for and finds a way to escape pressure. That said, Red should also live at home with his person where he has continuity of care and handling every day, where he sees his person every day. He also needs another calm, easy-going horse or two to mentor him. If you are not this person with the right situation, please do not inquire.  After three failed adoptions, we have failed to find Red a good home, though we sure thought we had. Now he can stay in his herd at as long as he needs and until he finds the perfect person with the perfect situation. This guy is so special, and he deserves nothing less.
        Red is current with dental and hoof care, vaccines, and deworming, and he has a microchip. In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3),

        ('Diesel', 'gelding', 'Mustang (USFS New Mexico)', '2014 (est.)', '/images/diesel.png', '14.2 hh (est.)', 'Bay', '1,000 lbs (est.)', 'Diesel came to Weatherford Animal Sanctuary from the USFS in New Mexico after participation in a wild horse gentling program at the Monty Roberts International Learning Center. Diesel was part of a group gathered off the Jarita Mesa Wild Horse Territory in the El Rito Ranger District of the Carson National Forest. After branding day in El Rito NM on June 30, 2016, the gathered horses were available for adoption in El Rito for  21 days, (7/1/2016 to 7/21/2016). They were then moved to Bloomfield, NM and were available for adoption there for 28 days, (7/22/2016 to 8/18/2016), where several were adopted. A small group (5) was transported to Flag is Up Farms in Solvang CA, where they went through a wild horse gentling program with students participating at the Monty Roberts International Learning Center. They were available for adoption for 75 days, (8/19/2016 to 11/1/2016) and two of the five were adopted. After November 1, 2016, the USFS decided a third good faith effort had been made (three strikes), and the horses were offered for sale ($25) without limitation. Diesel and his two buddies, Scout and Diego, came to us in November 2016 in lieu of posting to Craigslist for $25, as requested by the USFS. Diesel returned to Monty Roberts International Learning Center in 2017 for participation in another student program. Sadly, shortly after arrival, Diesel was lame in the hind end; however, the issue could not be pinpointed. Upon return to Weatherford, Diesel was put on stall rest, and subsequently diagnosed with Equine Protozoal Myeloencephalitis (EPM). Although he was treated, he has residual neurologic deficits that make him unsafe as as riding horse. Diesel will be adopted into a companion home only as a non-riding horse.  
        Diesel is a cute and curious guy. He halters and leads with a very slow, gentle approach. He struggles with a first touch, but once haltered, he has a ton of try. He tries very hard, but he continues to have trust and confidence issues with humans. It seems we are finally turning the corner, but he needs every day interaction. If not, he regresses and loses confidence in any initial contact. Initial approach for haltering is most successful in a small space or he will evade. Once haltered, he is fairly easy to handle. He does best when he gets daily interaction, and he will need someone who has time to devote to him, consistency and continuity for an extended period of time (aka, daily for weeks, months). With his inquisitive and playful personality, he could make a fun liberty horse! Diesel is current with vaccines, deworming, and hoof and dental care. He has a microchip, and needs sedation for farrier work. In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3),

        ('Ryder', 'gelding', 'Quarter Horse', '2006 (est.)', '/images/ryder.png', '15.2 hh (est.)', 'Paint', '1,2000 lbs (est.)', 'Weatherford Animal Sanctuary welcomed Ryder in April 2021 from a young couple that rescued him from a neglectful situation. They said he was very thin, his hooves were long, and he sat alone in a pasture. He was not very social, and I probably would not be either. The young man had known Ryder in younger years, and he talked the owner into giving him to them. They were able to put weight on him, get hooves trimmed, and build trust, but Ryder had some issues they were unable to resolve. They realized he was not going to be a riding horse, and they did not have finances to pursue further. He was lame in front and hind, and they believed he would foundered. First, when we picked-up Ryder''s and got him to Weatherford Animal Rescue, his hoof and dental care were updated, and he got vaccines, deworming, and a microchip. Radiographs of front hooves and hocks provided much information. He has advanced ringbone in his front left, and his pastern joint has nearly fused. His front right is clubbed, and both hooves had thin soles. Fortunately, he did not have any obvious founder/coffin bone rotation, thankfully. Ryder is a very friendly guy, and he very much enjoys the company of two-leggers. He loves to be groomed and doted on. He will always stand quietly for more. He had some lameness issues when he arrived. He was put in shoes to help with thin soles, and he was started on daily Equioxx to help with arthritis. After several trim cycles, his hooves and comfort improved tremendously, and he is been out of shoes most of the time. Last summer (2021), he was sensitive on the hard ground, and he was in shoes for two trim cycles. Once removed, he is been pretty comfortable since. He had a short bout of discomfort this summer, and we almost put shoes on him, but it was short-lived and not needed. 
        Ryder is generally a lower guy in the herd, no drama kinda guy, and we have not seen any behavior issues in our herd. That said, he has a history of starvation, which we believe reared a little new behavior. He went out on a short-lived adoption. It failed because he got food aggressive with other horses in a small herd (four horses) boarding situation. That said, the situation was not entirely right to begin with, but we hoped for the best for his sake with an opportunity for his own person to shower him with love. Needless to say, we were contacted within 24 hours to say it was not working. That said, there was no housing to separate Ryder from the other horses. He was put into the small herd in a less than ideal space, and it seems he felt he needed to protect/dominate the feed. Back at Weatherford Animal Rescue, we have not seen the issue. He handles pretty easy on the ground. He is respectful for the most part. He loads and trailers well. He has fun in the pasture with the herd and often plays with other geldings. He runs with the herd, on flat or hills, but with his arthritis, he is not a good riding option. Future adopters, please have adequate housing space that allows a new horse its own space, ideally adjacent to the other horse(s) he/she will be living with. A gradual introduction is almost always the best way to transition a new horse to another horse or herd. Ryder is not a mean guy, he is not a dominant guy, but he was basically starved at one point, and so this is not unexpected behavior. One thing Ryder is not fond of is oral meds, but he is improving. He is pretty good with the farrier, but if there are a lot of distractions, he gets nervous. With his arthritis, he needs a farrier that does not yank away at his joints. He is not bad, but just simple consideration with him goes a long way. The ideal home for Ryder is as a non-riding companion for another horse(s), and or a non-riding companion for a person. We do believe he was ridden in the past so he might make for a light lead-line option. He should have at least one other horse, and he could do well in a home housing option or a boarding facility, assuming he would have his own housing area for a slow transition/introduction to other horses). He does need a daily Equioxx pill (we give in a carrot pocket and he does not refuse). He also does best with a six week trim cycle with consideration to front shoes on hard, dry or rocky ground. 
        In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3), 

        ('Elli', 'mare', 'Norwegian Ford', '2001 (est.)', '/images/elli.png', '14.0 hh (est.)', 'Brown Dun', '1,000 lbs (est.)', 'Elli came to Weatherford Animal Sanctuary in May 2021 due to her owner''s health and financial hardship that left her at risk. Elli was much loved, and had been a family member since she was a weanling. Sadly, the owner was unable to continue her board/care as a result of her health and financial situation. Elli was never trained under saddle; she lived her life as a beloved non-riding companion horse. She was living in a herd environment in a large (dry) pasture area with several other horses without any apparent issues. Elli lived a healthy, uncomplicated life  We were told she did not have any health issues or hoof/lameness issues that required a vet visit. Elli is a sweet, quiet, mild-mannered little mare. She enjoys people, attention, grooming, and any oogling over her adorable little self. That said, she is been spoiled forever, and she has a pushy, resistant nature when asked to do something she does not want to do or has fear-based resistance to. Hoof-handling is a chore. She can be touched all over, but is not keen on giving a hoof for cleaning or farrier. The little demon in her comes out, and when she says ''No'', she means ''No''.  Kidding aside, her hooves are a work in progress. Elli loaded easily when she was picked up for transfer. She halters and leads fairly readily, but we will be working on softening. She seems unphased by other horses. She will be transitioning to a herd environment soon. So far, she is a pretty easy mare. However, due to her selective pushy-ness and difficulty with hoof handling, she needs an experienced person to help show her better ways. Elli is available for adoption as a non-riding companion to an experienced home. At this time, Elli is not suitable for beginners/novice horse owners nor a home with small children. At 20, she is not likely a riding candidate, but with time, improved manners, and experience, she could potentially become a nice little lead-line option, maybe more. Elli is current with hoof and dental care, vaccines and deworming, and she has a microchip in place. 
        In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3), 

        ('Bonnie', 'mare', 'Mustang (BLM)', '2001 (est.)', '/images/bonnie.png', '14.3 hh (est.)', '"Sorrel', '900 lbs (est.)', 'Weatherford Animal Sanctuary welcomed Bonnie from the DreamCatcher Wild Horse and Burro Sanctuary in August of 2019 to support their ongoing herd reduction efforts after the long illness and passing of their Executive Director, Barbara Clarke in November of 2016. Bonnie is an older mare, and winters at DreamCatcher can be difficult. We were told Bonnie was placed in sanctuary at DreamCatcher after failing training attempts with five different trainers. She is not trained under saddle. Bonnie a sweet, social mare and a moody, opinionated, obstinate mare, mostly enjoyable and sometimes not. She enjoys grooming and attention until she is does not, which is typically when asked to do something she would rather not. Bonnie has Cushings and a substantial fly allergy. It''s hard to keep her comfortable (she is very itchy and rubs). She gets a daily carrot pocket with her Cushings meds. A cooler climate would be ideal her. This past summer (2020), she was on antihistamines twice a day, and it has helped tremendously. We have repeatedly tried fly sheets and masks, but she destroys them within days. Fly spray, war paint, and swat, they all help, but she needs them applied regularly (once to twice a day) during fly season. Bonnie is all mare. She is dominant around food, and she is bossy in a herd. She usually connects well with one or two other horses. Her current buddy is Gunner. They have a perfect-love hate relationship. Bonnie is current with hoof and dental care, vaccines and deworming, and she has a microchip. Bonnie needs daily meds for Cushings, and daily antihistamines and extra effort with fly prevention during fly season. Diet-wise, she is on a grass hay diet supplemented with daily senior pellets. 
        In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3), 

        ('Rory', 'mare', 'Grade', '2011 (est.)', '/images/rory.png', '14.2 hh (est.)', 'Buckskin', '1,000 lbs (est.)', 'Rory came to Weatherford Animal Sanctuary in January 2021 from a distressed sanctuary. When we picked her up, she was in fairly good condition, but she was in need of hoof and dental care. She was sweet, but not very confident. There was no history on this girl, no known training, nothing. She had gone from a rescue to the sanctuary, and we hope with her stay in Weatherford, third time''s a charm and she will find her very own forever family. Shortly after arrival, she got the works: hoof and dental care, vaccines, deworming, and a microchip. We quickly learned, that though sweet, everything was on Rory''s terms. She was very opposed to doing anything she was not sure about. She did not appreciate hoof handling, farrier work, or anything out of the ordinary. Fortunately, with a little patience and kindness, she became more and more willing to try. Her confidence grew, and she had the opportunity for training. When introduced to the saddle, she made it clear she knew how to buck. Training shifted to build her confidence and, in time, her bucking issue resolved, and trainer was able to approach and use mounting block from both sides. She carried a rider at the walk only a few times, before training time was done. It''s been some time since she was with a trainer, and her confidence has continued to grow. We will continue with occasional saddle work as we can, but her new person should start again and teach her from the ground up to assure you are both speaking the same language. Rory is respectful on the ground. She enjoys grooming and attention, In general. She loads reasonably well. She handles most of the basics with out issue, though she could still learn some patience with the farrier. Rory is best suited for an experienced horse person. She is much more willing to try if you take things slow and do not push her too fast. In time, with a kind approach, she is going to make someone a fun project and a nice partner. 
        In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3), 

        ('Charley', 'mare', 'AQH (registered)', '8/12/2001', '/images/charley.png', '14.0 hh (est.)', 'Buckskin Dun', '900 lbs (est.)', 'Charley came to Weatherford Animal Sanctuary with her friend JoJo because their owners were downsizing and moving across the country and could not take them. They were their riding horses, but had not been ridden in many years. Charley was touted as the more calm, friendly, easy going mare, while Jojo was the more energetic of the two. Upon arrival in Weatherford, Charley and Jojo were in good condition and up-to-date with most basic care needs prior to their transfer; however, they did get some vaccines, deworming, and a microchip. They are on the maintenance schedule now. Charley has some arthritis and rotation in her front left leg, so she was started on Equioxx. Charley is mild-mannered, but not super confident. Over time, she is adapted to the changes from moving and her new environment. She and Jojo are somewhat attached, but have somewhat a love-hate relationship. Charley likes her food and her space, and she will enforce it. This past winter (Jan 23), Charley developed a massive abscess in her left hind hoof. Radiographs of both hind hooves indicated her left coffin bone rotated substantially, penetrating her sole (it cracked open). Rotation of one hind hoof is unusual, and it was likely a result of the huge abscess. Charley''s hoof was kept wrapped, she is worn hoof boots, and she is been getting TheraPlate treatments three times per day. Subsequent radiographs show her sole has thickened tremendously. She is recovering nicely, and her comfort level has improved immensely. So far, she seems to have recovered very nicely.
        Charley and Jojo were eventually separated. Their attachment and anxiety levels were not good for each other. Charley has done well in a stall near other horses, and Jojo was moved to a pasture where she met her Romeo (aka Ryder). Charley''s temperament has mellowed a ton. Pain reduction likely contributed, but she is a much more easy-going, calm, and a very sweet little mare. Between Charley''s arthritis in her front leg and rotated coffin bone, her riding days should be a thing of the past, though she might be able to give lead-line rides to littles. For the most part, she has good ground manners, and she is easy to handle. She is good with the farrier and handling her hooves. She was a bit nervous loading when we picked her up, but she should gain confidence once she practices a bit more. Charley would make a nice companion for a person and/or another older, limited horse. Her future home should have plenty of flat ground to minimize ongoing stresses to her arthritic knee. In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3), 

        ('Blue', 'gelding', 'Mustang (State of Nevada)', '2010 (est.)', '/images/blue.png', '14.0 hh (est.)', 'Blue Roan', '900 (est.)', 'Blue is a 2010 Virginia Range (NV) mustang gelding who came to Weatherford Animal Sanctuary March of 2017, after a request for assistance from the Virginia Range Wild Horse Sanctuary and Hidden Valley Wild Horse Protection Fund. Blue had been carrying around a large mass of proud flesh (granulation tissue) over his left rear fetlock/pastern area for some time. Although he had been haltered and handled some previously, he was not halterable when he arrived at Weatherford. We knew we had a big job ahead in helping Blue. Before we could evaluate the mass, he had to be gentled, haltered, and readily halterable, and his legs/hooves had to be readily handleable for frequent bandage changes after surgery. With a straightforward mustang, not a big deal, but Blue had some substantial fear/trust issues. Initial efforts with befriending and haltering him were lukewarm. Thanks to our vet, he had made enough progress that we were able to sedate him, radiograph the bony area beneath the mass, and collect tissue samples for biopsy. We wanted to make sure there was not an underlying reason for the mass other than old injury before getting too deep into corrective measures if they would be for naught. It was not an easy feat. Even with sedation, he kicked quickly and with purpose. 
        Radiographs and biopsy detected no obvious issues, so the work continued. Weeks in, Blue seemed to have had a reaction to something and developed a mysterious condition that turned out to be a form of vasculitis. He developed sores/ulcers throughout his entire mouth. The first layer of tissue pulled off with any type of pressure. They were horribly painful. Though his history and symptoms did not suggest, we had to quarantine him and test him for vesicular stomatitis. Thankfully, it was negative. We scaled back our efforts to reduce his stress and allow him to heal.  But, the mass was growing and oozing, and flies and yellow jackets swarmed the oozy mass. 
        After several weeks, he improved, and we resumed course.He would take a few steps forward, then a couple steps back. Finally, after many weeks with nominal results, we had a marathon day. We worked until we broke through. Six hours, he accepted handling and touching all over, and we practiced bandaging and removing bandage, over and over. The next day, our learning curve was much shorter, and the next and the next, until finally, we could halter, touch all over, and pick up his left hind and handle it all over. We practiced with bandaging materials again and wrapped it up, and he was a gem! We scheduled surgery, and in late August 2017, he lost nearly seven pounds in a matter of minutes. The mass had a narrow base and truly looked like a big brain. It weighed in at nearly seven pounds. Imagine what that must have felt like with every move.  Needless to say, it was done! However, the mouth lesions returned. There were more, and they were worse this time. They were on his body, around his anus, and on his sheath. Poor guy, these things were awful, and they appeared to be an autoimmune issue. At one point, we questioned his prognosis and quality of life, but before jumping to conclusions, we biopsied the tissue. We ended up with the vasculitis diagnosis. The best thing was, we changed up his meds, and the sores began to heal. The area where the mass was removed was beginning to heal. In the meantime, the next test came when it was time to change his first bandage. With a bit of sedation, it went fairly smooth, but cleaning the lesion was a little challenging. But, wow, it looked amazing! Such a tremendous improvement. It was like a victory in and of itself, even though not healed.   Healing progressed nicely! 
        After several bandage changes, Blue was getting resentful of the needle for sedation, so we tried without. It went well with cleaning a few times, but oddly, after a few times, he did not like it when placing the medicated bandage over the lesion. It seems he was healing, and he could feel the area again. He stomped the bandage off, over and over. The stomp was a little intimidating, but really, he was only trying to get the "big white bug" off his leg. He did not kick out or kick at. His stomp was purposeful in knocking the bandage off his leg. Unfortunately, we could not keep the bandage on, so we had to go back to sedation for a bit. Eventually, we could remove the bandage, clean the lesion, and replace the bandage without issue, without sedation, thankfully. Healing continued.
        By November 2017, the lesion was almost healed, but there was a small area where the granulation tissue was persisting, so it was trimmed off.  By January 2018, the lesion had nearly healed again. Blue made tremendous progress. However, as the months went on, the small area persisted and started to grow again. We lasered the area and biopsied for a third time, and this time the biopsy revealed a sarcoid. They are persistent little buggers! We tried some different medication over the months, but nothing resulted in complete healing, and by Fall, we decided to laser again; however, by November 2018, the sarcoid was growing, it was removed, and another course of treatment began with new medications. Blue stood quietly for bandage changes every two to three days.  
        As of mid-February 2019, Blue''s lesion appears to have healed, we continued applying an anti-viral cream daily for several weeks, maybe months.  So far, so good. The lesion is scarred (about a silver dollar-sized area with no hair growth), and his fetlock remains enlarged from lymphatic scarring. He is sound, just a bit awkward looking above his hoof.
        He is healthy, happy, and in much better shape than when he arrived. He continues to have challenges with trust, mostly when introducing new things, but he continues to show progress, one baby step at a time. He loves his carrots, and he will respectfully do almost anything for a bite of carrot. He also enjoys being "Uncle Blue" to the youngsters, a job he does well!
        As we have said before, Blue''s story is not an uncommon story in terms of the hurdles we cross with any intake with special needs. We have unexpected bumps in the road that required more than anticipated. For Blue, it was the bouts of vasculitis and later, the discovery of the sarcoid. For some, it is colic; for others, abscesses, lacerations from tree branches or scuffles with others. We cannot plan for these things, but need the resources to handle them when confronted.
        Blue is available for adoption only to the perfect, forever home. He needs a person that is mustang experienced, extremely patient, and has no expectations other than providing a safe, caring home. Keep in mind, he lived on the open range for years, and he does not enjoy confinement. At Weatherford Animal Sanctuary, he lives in a herd environment on about 10 acres. He comes in every morning and every evening at feeding time. He is somewhat social, but still skeptical of humans. Given the choice, he would prefer a free-roaming life with occasional visit to two-leggers. Blue gives his feet for cleaning, and he is ok with the farrier when trimmed in a small paddock. Blue has learned very basic groundwork. He is always looking for Plan B, an escape. He can be touched and handled all over, but continues to have a difficult time relaxing and enjoying. He is pretty good with his hooves, but the front right is still an effort. His leg is checked regularly for any recurrence of his sarcoid. Fortunately, we are still sarcoid free, and his scar is about the size of a quarter. Blue needs much more confidence before moving forward with saddle training. Continuity and consistency will be key in building his confidence and advancing his skills. Blue is up to date with dental and hoof care, vaccines, and deworming, and he has a microchip. In general, there is a lot of activity around Weatherford Animal Sanctuary including foot traffic in and out of paddock/pasture areas, mucking with wheelbarrows, grooming and care activities, weekly farrier visits. There are resident dogs, cats, chickens, and mini horses, as well as various wildlife including frequent turkeys and squirrels in and around paddock/pasture areas. Our sanctuary is situated on the corner of a busy road with high speed vehicles, trucks, and sirens. Tractors are used in and around pasture/paddock areas, trucks deliver feed, and a squeeze is occasionally used for unloading hay. Neighbors have weekly gardeners that utilize various power tools, and children that are active in yards adjacent to some stall/paddock areas. Therefore horses at Weatherford Animal Sanctuary are accustomed to a more active environment as opposed to a quiet or sterile environment.', 3);


        INSERT INTO pictures (url, animal_id)
        VALUES 
        ('/images/jeffery-profile-1.webp', 1),
        ('/images/jeffery-profile-2.webp', 1), 
        ('/images/jeffery.png', 1), 
        ('/images/jeffery-profile-3.webp', 1), 
        ('/images/bailey.jpg', 2), 
        ('/images/gideon.png', 3), 
        ('/images/gideon-profile-1.webp', 3), 
        ('/images/apollo.png', 4), 
        ('/images/apollo-profile-1.webp', 4),
        ('/images/apollo-profile-2.webp', 4),
        ('/images/apollo-profile-3.webp', 4),
        ('/images/apollo-profile-4.jpeg', 4),
        ('/images/bette.png', 5),
        ('/images/bette-profile-1.webp', 5),
        ('/images/bette-profile-2.webp', 5),
        ('/images/dodge.png', 6),
        ('/images/dodge-profile-1.webp', 6),
        ('/images/dodge-profile-2.webp', 6),
        ('/images/dodge-profile-3.webp', 6),
        ('/images/dodge-profile-4.webp', 6),
        ('/images/dodge-profile-5.webp', 6),
        ('/images/troy.png', 7),
        ('/images/troy-profile-1.webp', 7),
        ('/images/troy-profile-2.webp', 7),
        ('/images/edgar.png', 8),
        ('/images/edgar-profile-1.webp', 8),
        ('/images/dottie.png', 9),
        ('/images/dottie-profile-1.webp', 9),
        ('/images/dottie-profile-2.webp', 9),
        ('/images/dottie-profile-3.webp', 9),
        ('/images/dottie-profile-4.webp', 9),
        ('/images/dottie-profile-5.webp', 9),
        ('/images/mochi.png', 10),
        ('/images/mochi-profile-1.jfif', 10),
        ('/images/mochi-profile-2.jfif', 10),
        ('/images/frisco.png', 11), 
        ('/images/frisco-profile-1.jfif', 11), 
        ('/images/frisco-profile-2.jfif', 11), 
        ('/images/arby.png', 12), 
        ('/images/arby-profile-1.jfif', 12), 
        ('/images/yellowstone.png', 13), 
        ('/images/yellowstone-profile-1.png', 13), 
        ('/images/oatmeal.png', 14), 
        ('/images/oatmeal-profile-1.jpg', 14), 
        ('/images/oatmeal-profile-2.jpg', 14), 
        ('/images/finley.png', 15),
        ('/images/finley-profie-1.jpg', 15),
        ('/images/cali.png', 16),
        ('/images/cali-profile-1.jpg.png', 16),
        ('/images/maggie.png', 17),
        ('/images/maggie-profile-2.jpg', 17),
        ('/images/scout.png', 18),
        ('/images/scout-profile-1.jpg', 18),
        ('/images/dakota.png', 19),
        ('/images/dakota-profile-1.jpg', 19),
        ('/images/dakota-profile-2.jpg', 19),
        ('/images/dakota-profile-3.jpg', 19),
        ('/images/dakota-profile-4.jpg', 19),
        ('/images/dakota-profile-5.jpg', 19),
        ('/images/red.png', 20),
        ('/images/red-profile-1.jpg', 20),
        ('/images/red-profile-2.jpg', 20),
        ('/images/red-profile-3.png', 20),
        ('/images/red-profile-4.jpg', 20),
        ('/images/red-profile-5.jpg', 20),
        ('/images/diesel.png', 21),
        ('/images/diesel-profile-1.jpg', 21),
        ('/images/diesel-profile-2.jpg', 21),
        ('/images/diesel-profile-3.jpg', 21),
        ('/images/diesel-profile-4.jpg', 21),
        ('/images/ryder.png', 22),
        ('/images/ryder-profile-1.jpg', 22),
        ('/images/ryder-profile-2.jpg', 22),
        ('/images/elli.png', 23),
        ('/images/elli-profile-1.jpg', 23),
        ('/images/elli-profile-2.jpg', 23),
        ('/images/elli-profile-3.jpg', 23),
        ('/images/elli-profile-4.jpg', 23),
        ('/images/bonnie.png', 24),
        ('/images/bonnie-profile-1.jpg', 24),
        ('/images/bonnie-profile-2.jpg', 24),
        ('/images/bonnie-profile-3.jpg', 24),
        ('/images/bonnie-profile-4.jpg', 24),
        ('/images/rory.png', 25),
        ('/images/rory-profile-1.jpg', 25),
        ('/images/rory-profile-2.jpg', 25),
        ('/images/rory-profile-3.jpg', 25),
        ('/images/rory-profile-4.jpg', 25),
        ('/images/rory-profile-5.jpg', 25),
        ('/images/rory-profile-6.jpg', 25),
        ('/images/rory-profile-7.jpg', 25),
        ('/images/charley.png', 26),
        ('/images/charley-profile-1.jpg', 26),
        ('/images/charley-profile-2.jpg', 26),
        ('/images/blue.png', 27),
        ('/images/blue-profile-1.jpg', 27),
        ('/images/blue-profile-2.jpg', 27),
        ('/images/blue-profile-3.jpg', 27),
        ('/images/blue-profile-4.jpg', 27),
        ('/images/blue-profile-5.jpg', 27),
        ('/images/blue-profile-6.jpg', 27);


        INSERT INTO users (first_name, username)
        VALUES ('Alissa', 'maggiemay');

    
        `)
    },
    getAnimals: (req, res) => {
        const species = req.query.species;
        const userId = 1;

        if (!species) {
            sequelize.query(`
        
            SELECT 
                CASE 
                    WHEN user_id = ${userId} THEN true
                ELSE false
            END AS isFavorite,
            * FROM animals
            LEFT JOIN favorites on animals.animal_id = favorites.animal_id
            ORDER BY animals.animal_id ASC;
            
            `).then((dbRes) => {
                res.status(200).send(dbRes[0])
            }).catch((error) => {
                res.status(500).send(error)
            });
        }
        else {
            sequelize.query(`
            SELECT 
                CASE 
                    WHEN user_id = ${userId} THEN true
                ELSE false
            END AS isFavorite,
            * FROM animals
            JOIN species ON animals.species_id = species.species_id
            LEFT JOIN favorites on animals.animal_id = favorites.animal_id
            WHERE species.species_name ILIKE '${species}'
            ORDER BY animals.animal_id ASC;
            
            `).then((dbRes) => {
                res.status(200).send(dbRes[0])
            }).catch((error) => {
                res.status(500).send(error)
            })
        }

    },

    getFavorites: (req, res) => {
        const userId = req.params.id;

        sequelize.query(`
        
        SELECT 
                CASE 
                    WHEN user_id = ${userId} THEN true
                ELSE false
            END AS isFavorite,
        * FROM favorites 
        JOIN animals ON 
        animals.animal_id = favorites.animal_id
        WHERE favorites.user_id = ${userId}; 
        
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch((error) => {
            res.status(500).send(error)
        })
    },

    saveFavorites: (req, res) => {

        sequelize.query(`

        INSERT INTO favorites (animal_id, user_id) VALUES (${req.body.animalId}, ${req.params.id})
        ON CONFLICT (animal_id, user_id) 
        DO UPDATE SET animal_id=${req.body.animalId}, user_id=${req.params.id};


        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch((error) => {
            res.status(500).send(error)
        })

    },

    deleteFavorites: (req, res) => {
        const animalId = req.params.animalId;
        const userId = req.params.id;
        console.log(animalId, userId);
        sequelize.query(`
        
        DELETE FROM FAVORITES 
        WHERE animal_id = ${animalId} AND user_id = ${userId}
    
        `).then((dbRes) => {
            res.status(200).send(dbRes)
        }).catch((error) => {
            res.status(500).send(error)
        })
    },

    getProfile: (req, res) => {
        const animalId = req.params.id;
        const userId = 1;
        sequelize.query(`
        
        SELECT 
        CASE 
            WHEN user_id = ${userId} THEN true
        ELSE false
    END AS isFavorite,
    * FROM animals
    JOIN species ON animals.species_id = species.species_id
    LEFT JOIN favorites on animals.animal_id = favorites.animal_id
    WHERE animals.animal_id = ${animalId}
        
        `).then((dbRes) => {
            if (dbRes[0].length == 0){
                res.status(404).send();
            }else {
                const animal = dbRes[0][0];
                sequelize.query(`
                SELECT * FROM pictures WHERE animal_id = ${animalId}
                `).then((pictureResult) => {
                    animal.pictures = pictureResult[0];
                    res.status(200).send(animal);
                })
            }
            
        }).catch((error) => {
            res.status(500).send(error)
        })
    }
};

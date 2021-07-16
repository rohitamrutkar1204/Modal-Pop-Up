var modal=document.getElementById("myModal");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var text=document.getElementById("text");
var img=document.getElementById("img");
var span = document.getElementsByClassName("close")[0];

one.onclick = function() {
  modal.style.display = "block";  //will make the contetn appear
  img.src="https://www.shortlist.com/media/imager/202004/47581-original.jpg";
  text.innerHTML="Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones (1996).Nine noble families fight for control of the mythical land of Westeros. Political and sexual intrigue is pervasive. Robert Baratheon (Mark Addy), King of Westeros, asks his old friend, Lord Eddard Stark (Sean Bean), to serve as Hand of the King, or highest official. Secretly warned that the previous Hand was assassinated, Eddard accepts in order of business to investigate further. Meanwhile, Queen Cersei Lannister's family may be hatching a plot to take power. Across the sea, the last members of the previous and deposed ruling family, the Targaryens, are also scheming to regain the throne. The friction between the houses Stark, Lannister, Baratheon, and Targaryen and with the remaining great houses Greyjoy, Tully, Arryn, Tyrell, and Martell leads to full-scale war. All while an ancient evil awakens in the farthest north. Amidst the war and political confusion, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.<br><b>Overall An EPIC series to watch!!</b> ";
 
}

two.onclick = function() {
  modal.style.display = "block";
  img.src="https://cdn.mos.cms.futurecdn.net/b4ERr2LQcbAMctgTpJVA2B-1200-80.jpg";
  text.innerHTML="Friends, popular American television sitcom that aired on the National Broadcasting Company (NBC) network from 1994 to 2004. It won six Emmy Awards, including outstanding comedy series,Friends was created by David Crane and Marta Kauffman and is about a group of six young adults who are either roommates or neighbours in New York City’s Greenwich Village. Much of the show takes place in the friends’ apartments as they visit one another. The program revolves around the characters’ individual and collective search for sex, commitment, and meaning. The friends consist of three men and three women, whose varied personalities and shortcomings allow for both broad audience identification and abundant comedic moments.This is one of the evergreen series that can ever be there with no replacement."


}

three.onclick = function() {
  modal.style.display = "block";
  img.src="https://wp.stanforddaily.com/wp-content/uploads/2020/07/IMAGE4DAILY.jpg";
  text.innerHTML="Brooklyn Nine-Nine is an American police procedural comedy television series created by Dan Goor and Michael Schur. The series revolves around Jake Peralta (Andy Samberg), an immature but talented NYPD detective in Brooklyn's fictional 99th Precinct, who often comes into conflict with his new commanding officer, the serious and stern Captain Raymond Holt (Andre Braugher). The rest of the cast features Stephanie Beatriz as Rosa Diaz, Terry Crews as Terry Jeffords, Melissa Fumero as Amy Santiago, Joe Lo Truglio as Charles Boyle, Chelsea Peretti as Gina Linetti, Dirk Blocker as Michael Hitchcock, and Joel McKinnon Miller as Norm Scully.he series has been acclaimed by critics for its cast, especially Samberg and Braugher. It has won two Creative Arts Emmy Awards and a Golden Globe Award for Best Television Series – Musical or Comedy. Samberg has won a Golden Globe Award for Best Actor "
}

four.onclick = function() {
  modal.style.display = "block";
  img.src="https://thedigitalwise.com/wp-content/uploads/2019/06/Netflix-Dark-Season-3.jpg";
  text.innerHTML="Dark is a German science fiction thriller web television series co-created by Baran bo Odar and Jantje Friese. Dark concerns the aftermath of a child's disappearance, which exposes the secrets of and hidden connections among four estranged families as they slowly unravel a sinister time travel conspiracy which spans several generations. Throughout the series, Dark explores the existential implications of time and its effects upon human nature.Children start vanishing from the German town of Winden, bringing to light the fractured relationships, double lives, and dark past of four families living there, and revealing a mystery that spans four generations.The story begins in 2019, but spreads to include story-lines in 1986 and 1953 via time travel, as certain characters of the show's core families grow aware of the existence of a wormhole in the cave system beneath the local nuclear power plant, which is under the management of the influential Tiedemann family. During the first season, secrets begin to be revealed concerning the Kahnwald, Nielsen, Doppler, and Tiedemann families, and their lives start to crumble as the ties become evident between the missing children and the histories of the town and its citizens.";
}

span.onclick = function() {
  modal.style.display = "none";
}

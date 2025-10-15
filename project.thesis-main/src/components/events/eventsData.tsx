export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
  time: string;
  attendees: number;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Magayon Festival",
    description:
      "Get into the beat of Albay’s biggest  and grandest festival! There’s street dancing, show bands, sport competitions, and more! It’s a celebration of everything grand in Albay –Mayon Volcano, history, culture, trade, and nature. Join the fun and experience merrymaking the Albayano way.",
    date: "May 1-31",
    location: "Legazpi City, Albay",
    image:
      "https://primer.com.ph/tips-guides/wp-content/uploads/sites/5/2018/04/18839029_1571505332883438_9023714905642531341_n.jpg",
    category: "Cultural Festival",
    time: "All Day",
    attendees: 5000,
  },
  {
    id: "2",
    title: "Ibalong Festival",
    description:
      "A celebration in recognition of the socio-historic-cultural heritage of Bicolanos as based on the Ibalong Epic showcasing the bravery and strength in character of three heroes Baltog, Handyong, and Bantong as they fought against the villains Tandayog, Oryol, Rabot, and other wild monsters that threatened the place and orderliness of their place. ",
    date: "August 10-19",
    location: "Legazpi City, Albay",
    image:
      "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/551003185_794566239870353_935334780318905612_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGVyBDwWBbMM3nW3akIdjgHyf9Fxn7WTbrJ_0XGftZNuj0ZEyQhjjtMivnToOcgrfGOhM7lA16QdAgMAHfoEuON&_nc_ohc=9YRBhlAykEUQ7kNvwE6LPiN&_nc_oc=AdkOW_jGY-i4_YVnC2tpVqBu-SqyO2pjOjwO_CN10msFKq6zYin2wr5Bzim50LouRNI&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gHeByMOMAU-zLu7t_p0SUrUllA2DTjyv5_TZ3ybXnHLAA&oe=6912003B",
    category: "Cultural Festival",
    time: "9:00 AM - 10:00 PM",
    attendees: 3500,
  },
  {
    id: "3",
    title: "Cagsawa Festival",
    description:
      "The Cagsawa Festival aims to celebrate the indomitable spirit and resilience of Albayanos, and not the memory of the disaster’s horrors. The month-long Cagsawa Festival,celebrated every February, kicks off at the historic and world famous Cagsawa Ruins.",
    date: "February 1-29",
    location: "Daraga, Albay",
    image:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/552924150_847417147858310_8155731556976969512_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGziw8fxbSDe3DW3hoXKvXFeaQdTeoSPAF5pB1N6hI8AQS3zVEN-3vEtNPSHbV-xN4vopVQnUL79dtKRbdcbiTL&_nc_ohc=YYWx7GNVnsAQ7kNvwHsVr4e&_nc_oc=AdmB1qjeapVp-bWwaTDgkOajejIz2a2HSy0AvuD36w6XXGbctSehqQjSQcTraJwux60&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gGq7VZkwgfwercrFW7c2sHm2YsLrQDAXZvR3nFkJPFBog&oe=6911DBCB",
    category: "Historical Commemoration",
    time: "8:00 AM - 8:00 PM",
    attendees: 2000,
  },
  {
  id: "4",
  title: "Puto Festival",
  description:
    "The Municipality celebrates “Puto Festival “to develop the camaraderie of Oasnun and recognizes as well the delicacy of the town which is the “puto”.",
  date: "April 27 - May 8",
  location: "Oas, Albay",
  image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/554060371_1226235612665059_5002818656739320488_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEXAMyrWx7-uoQ1S4BuzCun6Mq5V_zsG-_oyrlX_Owb72HMc8xj_upzvxOZqkfG0I0cBlyPfMyXTPaBLnQd88DM&_nc_ohc=_Xz99rc4jVAQ7kNvwHvwhqB&_nc_oc=Adkdgv-cdpG1R_Fn5hpd3h3KDR_Sv5KnE8qZMVLGJ3B0k3CZI_UZrYfYNQcc37uuwrM&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=03_Q7cD3gGTxR0U-N2Gq3_yjnHSJfIUMh3uJGU9mYVPGlpLdLg95g&oe=6911FB99",
  category: "Food Festival",
  time: "All Day",
  attendees: 2500,
},
{
  id: "5",
  title: "Sarung Banggi Festival",
  description:
    "Sto. Domingo is best known to be home of the immortal and beloved song of Bicol– Sarung Banggi whose composer was Potenciano Gregorio, a native son of Sto. Domingo. The festival is celebrated yearly from May 10-20 coinciding with the birth of the late composer on the third week of May.  ",
  date: "May 10-20",
  location: "Sto. Domingo, Albay",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/554183157_1350346659966255_1987307924818112029_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFQz6MxLpdZvZZMYW9KdYK0_Q0BhwzQqe_9DQGHDNCp7w2BpDHCjDki_JB-kb3WqbQUHucCTQuIdlEifN8dvmZA&_nc_ohc=TU0ha6YLf58Q7kNvwEpP_7U&_nc_oc=AdnIYlXtAUOzX7ol4Eo3nOgNVA-m5y2VAJxH_rodhmVJ2EcyTGIilK6PAJ1NSQMMsmI&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gGfpUmMWPRmYiZOcbyYksrLj5FA6ZNmAmp2Flj66PgEdw&oe=6911FF0A",
  category: "Music & Cultural Festival",
  time: "All Day",
  attendees: 3000,
},
{
  id: "6",
  title: "Layag Festival",
  description:
    "The festival name was taken from a local word “layag” or sail boat which is a primitive means of transportation of the early people of RapuRapu. It depicts the people’s journey of faith.",
  date: "May 20-27",
  location: "Rapu-Rapu, Albay",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/557540611_1333317624901834_8086426659257181727_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFbhm1cAvwBvanfPzitGFlwVWOF_VuYv9tVY4X9W5i_2yl0bRxPo-hGBkthOj_RBgP5Fifnn9PkswVrRdNrzOfg&_nc_ohc=qhMQWJfUZVUQ7kNvwEeJg_6&_nc_oc=Adk58ThxL8pLCVhXoebcQqQ8wzk9zkt33z0mYPdOAa5B-E9S9hANpsK-uPbvmMim59I&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gFToNYtYnYzfn4y8Uy7FhRFJgU_pr9U2kCdG-P_pwOHMQ&oe=6911F911",
  category: "Cultural Festival",
  time: "All Day",
  attendees: 1800,
},
{
  id: "7",
  title: "Pinangat Festival",
  description:
    "An annual festival celebrated every month of June 10-24 to coincide with the town fiesta in honor of its Patron Saint, St. John the Baptist. The festival’s name is acquired through the world famous native food delicacy of the municipality which is the Pinangat.  ",
  date: "June 10-24",
  location: "Camalig, Albay",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/563359813_1177227674301096_1568398667034631895_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHDgZ3TiAPgWaLI-PioMktmrjpcfPqSH8auOlx8-pIfxgFDJqOaBiyYVF2omElkkjWGD8KpirPlbwIqzE7umeC6&_nc_ohc=TF14BQxwufoQ7kNvwHvtWtM&_nc_oc=AdnrXUnRN5iY5HAww_SXQjFa1TV1EauH6vNMhD5r6mgpYl2HHvtttbQ7JbCl8_Rzzhc&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gFE2ShaVHyc7xTuO3AsNmgqUT13lNTnyXZR3C-SoKSmNw&oe=6911FA84",
  category: "Food & Cultural Festival",
  time: "All Day",
  attendees: 2200,
},
{
  id: "8",
  title: "Pulang-Angui Festival",
  description:
    "Pulang-Angui Festival is celebrated annually which tells the story of a maiden who loves everything in red. (\"Red Maria\") (Angui is the nickname for Maria) who loved red colors for dress and whose beautiful body, face and red lips became the object of affection by the males to the point of adoration.",
  date: "June 15-30",
  location: "Polangui, Albay",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/554038234_797423626407832_977502995430621216_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGyBwn4xLtVTWfzOL5Fgu-yVh1F2jp6YYRWHUXaOnphhIYvEOBs2Okqlyo2H74XhE3ADUP8q6bOvDfck-2cDc5g&_nc_ohc=9xLoRnLj7R8Q7kNvwHJyVR0&_nc_oc=AdlrR81VES2YesvodrEVVSQlWZev7XEEb2VBEoHdyVpp-Mny61tH0sIcbQKb4ptDZ1s&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gEt3RFEqxPqMJjAh8XVD8AVjms0bBP4J8XWtDlQQjYmyw&oe=69120AAA",
  category: "Cultural Festival",
  time: "All Day",
  attendees: 2400,
},
{
  id: "9",
  title: "Tabak Festival",
  description:
    "A celebration showcasing the artistry of Tabaquenos in producing their very own cutleries with hard labor. It came from the word “tabak ko!,tabak ko!” which means “ my sword, my sword!”. Tabaco City is known for having the “blacksmiths” in Barangay Cobo.",
  date: "June 16-25",
  location: "Tabaco City, Albay",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/550732922_24467561499593334_9184199988690452001_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF4VvVP5OOd02VXuY6S7Dgq-jiyvEiytSf6OLK8SLK1J8hs9f_BYlAUy5VvTVZZHa3EmyV-_bE26sD8qXNA_7Zc&_nc_ohc=BikCCFIyZucQ7kNvwHAiybX&_nc_oc=AdmcUJaaTgfAEsiNeUPBuFMkJWWXH4CuhGCno3WAVzg023FMQWx4TZcWx-zwdwGf6G4&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gEIjTwTZdxnLbsUQHJgqLNfrR-ezapWMftc1PEPFkucAw&oe=6911EA94",
  category: "Cultural & Craft Festival",
  time: "All Day",
  attendees: 3200,
},
{
  id: "10",
  title: "Lubid Festival",
  description:
    "A celebration showcasing abaca hemp–locally known as lubid which the Municipality of Malilipot is known to be the region’s producer, its many uses and importance as a major source of livelihood of the local community. Various activities are lined up highlighted by street dance parade where participants are colorfully dressed in abaca costumes.",
  date: "July 9-18",
  location: "Malilipot, Albay",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/557827088_4127353190926715_675118453846975229_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG0Vuj2LrLGuqkbg45UayqmRdMTHEYW4EdF0xMcRhbgR85kIq23K8w_afNVG8C0bsFO977AQsVZSR9obYXcu5WS&_nc_ohc=bjCLMbN5kmoQ7kNvwGqjm8t&_nc_oc=Adlv3wG0_sieLmrxQuFviQzZfnv74uvv3Axy6WEq7DRF5Ks4Hd60WN1aorp_TS-smUY&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gHjYN2clZi9HFBR5u_RNzOxFJP8sWjSRh595g2NhlCFbQ&oe=6912021F",
  category: "Industrial & Cultural Festival",
  time: "All Day",
  attendees: 2100,
},
{
  id: "11",
  title: "Alinao Festival",
  description:
    "The festival, celebrated every July 21-25, reflects on the town’s main source of living”paroy” or rice and known as the rice granary of Albay. It features various activities including street parade, sports fest, longest tilapia and corn grill, and many more.",
  date: "July 25-26",
  location: "Malinao, Albay",
  image: "https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.15752-9/553504137_1106447588362302_2287481491094017748_n.png?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEUiIlgMF3WXaIN3Ml4SkmA8omMQzby0gTyiYxDNvLSBCrKS5zFUa23uAewdy0I5YScKILPspZeJ7VIxSdIY3Ta&_nc_ohc=XqAbP-1swysQ7kNvwHXW5Zx&_nc_oc=AdkOQnnlilhAeDxbPehoBd8_lIwoJZyE-ACvONtZCK70JG_FqOFeSuFkhGN4cRCzUF4&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&oh=03_Q7cD3gHA15HWwWiEbsAjs_7E1sLEimIvv8eqeqkpcX2NbMdvOg&oe=6911EEE9",
  category: "Environmental & Cultural Festival",
  time: "All Day",
  attendees: 1800,
},
{
  id: "12",
  title: "Libon Paroy Festival",
  description:
    "Celebrates Libon’s title as the 'rice granary of Albay' through parades, sports fests, and local cook-offs featuring rice and corn products.",
  date: "July 1-28",
  location: "Libon, Albay",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/551175623_1478964419989305_4498120771473774555_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFRlS33ucsIXhi0rDB1bbwjBMeKcL0sLDUEx4pwvSwsNUxd3yoOR3BJs9RLTVX-QbPK0rPtbqIk0_a4y11h0qFb&_nc_ohc=lMHreP8t7gQQ7kNvwGUwe4J&_nc_oc=AdmFLDh5kCHEKyDOEBNFm-MHeNIbC4Z3qZwb5Q3ZDkHkjhstwcpbZ4khOxfTpj0NSto&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gEv5MUKEy0Nq-OXMDedvQbKZsbKrjEHBzb5U_bkEn2uPg&oe=6911DCCF",
  category: "Agricultural Festival",
  time: "All Day",
  attendees: 2600,
},
{
  id: "13",
  title: "Coron Festival",
  description:
    "Tiwi is famous originally because of the “Coron” or pottery products that are shaped in different forms and sizes either in round or hexagonal shapes.",
  date: "August 1-30",
  location: "Tiwi, Albay",
  image: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/542369003_1325703032432984_6326648863860325330_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzzTdNQwXXawdPe2BX8CsGLKHwo2MFJ70sofCjYwUnvcG4LDEFbx4P7L5zET5OJjiLOsDE6BVp2fZvTKnXI345&_nc_ohc=mcQbn3Oug04Q7kNvwENtAjG&_nc_oc=AdmUUBw9pIMGoSFQyC6v7LHRWd2IyHhWQ2R5LPPRzzLzwe9jyGiC9SyMnkDq_BIz3Dk&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=03_Q7cD3gH_-neZVePfV8sKkjzjN-m3PRTmi45JP2qJptX43eS19Q&oe=6911D6C1",
  category: "Artisan & Cultural Festival",
  time: "All Day",
  attendees: 1900,
},
{
  id: "14",
  title: "Guinobatan Longganisa Festival",
  description:
    "The festival is held every August 7-15 to coincide with the town fiesta as a form of thanksgiving for the bounties from the land. Various activities are lined up to drumbeat the affair; the highlight of the festival is the showcase of cuisines that features their main product, the Guinobatan Longganisa.",
  date: "August 1-15",
  location: "Guinobatan, Albay",
  image: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.15752-9/564298943_662951340215405_4484603711227568946_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHQFm94A8oYQXT8VmlchoGp9yh4gT-rnD33KHiBP6ucPXvSglyDeAndsAcTbMmk7fTL1b9Gp4XwN8xhM_q8x3j4&_nc_ohc=o1pF3UC39bwQ7kNvwHmBHLj&_nc_oc=AdmZmJ_6KI0bzin_19TvC6lwo36fuRWFEdrHq_SLujyS3okawS6I_uwzetVuZjWxDEM&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=03_Q7cD3gHgafOUsJVLuE5Sg6A6P4ycOIkNkasZnOuvtPxlZ7pF-Q&oe=6911DE9B",
  category: "Food Festival",
  time: "All Day",
  attendees: 2700,
},
{
  id: "15",
  title: "Karagumoy Festival",
  description:
    "Karagumoy is the local name for the pandan family, which grows to more than six feet tall. The strips from the long leaves of the plant is dried, flattened, and dyed before being woven into mats, hats, fans, and bags. The woven products are one of the main products of the coastal town of Bacacay. This is celebrated from August 21-31.",
  date: "August 21-31",
  location: "Bacacay, Albay",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/564085699_1139409381032816_1428621501547510353_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGW4wkY-hDHKWh6S8GwypWKbG4UgGNH7f1sbhSAY0ft_QpKi9pzePFkKbqZzyWbPiibPWyQDXfORP6u2Dcr91pe&_nc_ohc=kGstBYODfxkQ7kNvwFHkGnv&_nc_oc=AdlvwswOo8dTyrQGeWFmqhd8xSNa7umNaNro0DcJWJxNAle9xm9vB9poYc1gRh7sB_o&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gE40k5kTxQNhZX7yF5vL6Y4zMbPoGvwY7QY8rD4AUZgOw&oe=6911E134",
  category: "Craft & Trade Festival",
  time: "All Day",
  attendees: 2300,
},
{
  id: "16",
  title: "Quipia Festival",
  description:
    "The term “Quipia” was the former name of the municipality.  An annual festival held in time for its fiesta celebration from August 21-29, the festival features various events highlighted by a street presentation. ",
  date: "August 21-29",
  location: "Jovellar, Albay",
  image: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/550960785_741298018934937_2351391732845012090_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEL-ecv-RYLGOdw2SYvK6r0PyU3BG5ozRw_JTcEbmjNHEOTzrx3yeTMCCOM3yYFT77G2bX0PK1qOrOomy4TBXU4&_nc_ohc=dryf7CO9t94Q7kNvwG63lH9&_nc_oc=AdmrcKxWX6leBefyUSw3HD6L9USFbu3CcgHqzO2ejxuu5zND1I2LjM10fFvrOBkL08o&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=03_Q7cD3gHjxnfbKYWcOzBVF7YmFHHyIpcXDZPxlB-JP_o22vW-dA&oe=6911E961",
  category: "Cultural Festival",
  time: "All Day",
  attendees: 2000,
},
{
  id: "17",
  title: "Nito-Talahib Festival",
  description:
    "The festival, celebrated every October 14-23, brings honor to the nito-talahib, also known as common grass or kans grass, which plays a vital part in the history of their place and in the lives of the people. The municipality was named Manito by the early settlers because the place is rich in nito, a clinging vine which belongs to the rattan family.",
  date: "October 14-23",
  location: "Manito, Albay",
  image: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.15752-9/564155369_1499877391251503_494975744897270252_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFFwT4mrRw9k_HL0EQ8VOYphLVxRzlodkGEtXFHOWh2QTWLt-sSPp-YxrrEvnsGXy9Uf0dFoZMrZ5sICKeFeOBn&_nc_ohc=CidCXTntKDAQ7kNvwEaeFNq&_nc_oc=Adlgr8W5iYsUdlJHsqSja6Wp9cXIK_37IiOUupnxz2aQCKVIKXMCKP2jDrUKHwsX0o0&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=03_Q7cD3gE99V0PQAA3q0h9X_3z691dDlPRztEnj1DsV5ZQCqrzDw&oe=6911D575",
  category: "Environmental Festival",
  time: "All Day",
  attendees: 1800,
},
{
  id: "18",
  title: "Tinapa Festival",
  description:
    "This festival celebrates the municipality’s bountiful blessings they are receiving and showcases their culinary expertise in using “Tinapa“(smoked fish) in their highlight events. ",
  date: "February 23 – March 13",
  location: "Pioduran, Albay",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3FiDLkdOzJK-U7Qo-VaHCFuo6d_QgnM54Q&s",
  category: "Food Festival",
  time: "All Day",
  attendees: 2100,
},
{
  id: "19",
  title: "Sunflower Festival",
  description:
    "Celebrated in  March  in Ligao City  that coincides with their Cityhood Anniversary, this festival highlights' activities  that features their Sunflowers  that are in bloom at Kawa Kawa Hill.",
  date: "March 20-26",
  location: "Ligao City, Albay",
  image: "https://scontent.fmnl37-2.fna.fbcdn.net/v/t1.15752-9/557590518_1360933722340759_7607583167404801582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE7ss9ewMBwU5mGHP6vajIpzVayQd6KXkjNVrJB3opeSJig0d7exqtNS-GlwCns7TP-iAGT4Y7ryH8C8dBtEiSi&_nc_ohc=kcYg4KP76h0Q7kNvwF0Um5-&_nc_oc=AdmEmtqoe1BBA3aoi9MvUSRKZW5lGoGZ1Er95sO2RNWCT_Sxk-bCkRZrcb0fI7mZ8kw&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&oh=03_Q7cD3gFQDrl61wbMXQlbXGVX3UhPaRYEFD-F_OsYqj8lZU3ePQ&oe=6911E268",
  category: "City Festival",
  time: "All Day",
  attendees: 2800,
},
];

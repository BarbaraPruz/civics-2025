import type { Question } from "@/types/question";

export const questions: Question[] = [
// 128 USCIS Civics Test Questions (M-1778, 2025 version)
// Source: https://www.uscis.gov/citizenship/2025-civics-test
// Note: Questions marked with * are the 65/20 special consideration set.
// Some answers (Q23, Q29, Q30, Q38, Q39, Q57, Q61, Q62) vary by location or change with elections/appointments.
// Always check https://www.uscis.gov/citizenship/testupdates for current officeholder answers.

  // ── AMERICAN GOVERNMENT ──────────────────────────────────────────────────────
  // A: Principles of American Government (Q1–Q15)

  {
    id: 1,
    question: "What is the form of government of the United States?",
    answer: "<ul><li>Republic</li><li>Constitution-based federal republic</li><li>Representative democracy</li></ul>",
    category: "Principles of American Government",
    reference: { label: "USA.gov – How the U.S. Government Is Organized", href: "https://www.usa.gov/branches-of-government" }
  },
  {
    id: 2,
    question: "What is the supreme law of the land?", //*
    answer: "<ul><li>(U.S.) Constitution</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Constitution Center – The U.S. Constitution", href: "https://constitutioncenter.org/the-constitution" }
  },
  {
    id: 3,
    question: "Name one thing the U.S. Constitution does.",
    answer: "<ul><li>Forms the government</li><li>Defines powers of government</li><li>Defines the parts of government</li><li>Protects the rights of the people</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Constitution Center – What Does the Constitution Do?", href: "https://constitutioncenter.org/learn/educational-resources/what-does-the-constitution-do" }
  },
  {
    id: 4,
    question: "The U.S. Constitution starts with the words \"We the People.\" What does \"We the People\" mean?",
    answer: "<ul><li>Self-government</li><li>Popular sovereignty</li><li>Consent of the governed</li><li>People should govern themselves</li><li>(Example of) social contract</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Constitution Center – Preamble", href: "https://constitutioncenter.org/the-constitution/preamble" }
  },
  {
    id: 5,
    question: "How are changes made to the U.S. Constitution?",
    answer: "<ul><li>Amendments</li><li>The amendment process</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Archives.gov – Constitutional Amendment Process", href: "https://www.archives.gov/federal-register/constitution" }
  },
  {
    id: 6,
    question: "What does the Bill of Rights protect?",
    answer: "<ul><li>(The basic) rights of Americans</li><li>(The basic) rights of people living in the United States</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Archives.gov – The Bill of Rights", href: "https://www.archives.gov/founding-docs/bill-of-rights" }
  },
  {
    id: 7,
    question: "How many amendments does the U.S. Constitution have?",//*
    answer: "<ul><li>Twenty-seven (27)</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Constitution Center – The Amendments", href: "https://constitutioncenter.org/the-constitution/amendments" }
  },
  {
    id: 8,
    question: "Why is the Declaration of Independence important?",
    answer: "<ul><li>It says America is free from British control.</li><li>It says all people are created equal.</li><li>It identifies inherent rights.</li><li>It identifies individual freedoms.</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Archives.gov – Declaration of Independence", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 9,
    question: "What founding document said the American colonies were free from Britain?",
    answer: "<ul><li>Declaration of Independence</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Archives.gov – Declaration of Independence", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 10,
    question: "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    answer: "<ul><li>Equality</li><li>Liberty</li><li>Social contract</li><li>Natural rights</li><li>Limited government</li><li>Self-government</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Library of Congress – Founding Documents", href: "https://www.loc.gov/collections/constitutional-convention-and-ratification/" }
  },
  {
    id: 11,
    question: "The words \"Life, Liberty, and the pursuit of Happiness\" are in what founding document?",
    answer: "<ul><li>Declaration of Independence</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Archives.gov – Declaration of Independence", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 12,
    question: "What is the economic system of the United States?", //*
    answer: "<ul><li>Capitalism</li><li>Free market economy</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Investopedia – Capitalism", href: "https://www.investopedia.com/terms/c/capitalism.asp" }
  },
  {
    id: 13,
    question: "What is the rule of law?",
    answer: "<ul><li>Everyone must follow the law.</li><li>Leaders must obey the law.</li><li>Government must obey the law.</li><li>No one is above the law.</li></ul>",
    category: "Principles of American Government",
    reference: { label: "World Justice Project – What Is the Rule of Law?", href: "https://worldjusticeproject.org/about-us/overview/what-rule-law" }
  },
  {
    id: 14,
    question: "Many documents influenced the U.S. Constitution. Name one.",
    answer: "<ul><li>Declaration of Independence</li><li>Articles of Confederation</li><li>Federalist Papers</li><li>Anti-Federalist Papers</li><li>Virginia Declaration of Rights</li><li>Fundamental Orders of Connecticut</li><li>Mayflower Compact</li><li>Iroquois Great Law of Peace</li></ul>",
    category: "Principles of American Government",
    reference: { label: "Constitution Center – Influences on the Constitution", href: "https://constitutioncenter.org/learn" }
  },
  {
    id: 15,
    question: "There are three branches of government. Why?",
    answer: "<ul><li>So one part does not become too powerful</li><li>Checks and balances</li><li>Separation of powers</li></ul>",
    category: "Principles of American Government",
    reference: { label: "USA.gov – Branches of the U.S. Government", href: "https://www.usa.gov/branches-of-government" }
  },

  // B: System of Government (Q16–Q72)

  {
    id: 16,
    question: "Name the three branches of government.",
    answer: "<ul><li>Legislative, executive, and judicial</li><li>Congress, president, and the courts</li></ul>",
    category: "System of Government",
    reference: { label: "USA.gov – Branches of the U.S. Government", href: "https://www.usa.gov/branches-of-government" }
  },
  {
    id: 17,
    question: "The President of the United States is in charge of which branch of government?",
    answer: "<ul><li>Executive branch</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Executive Branch", href: "https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/" }
  },
  {
    id: 18,
    question: "What part of the federal government writes laws?",
    answer: "<ul><li>(U.S.) Congress</li><li>(U.S. or national) legislature</li><li>Legislative branch</li></ul>",
    category: "System of Government",
    reference: { label: "Congress.gov – About Congress", href: "https://www.congress.gov/about" }
  },
  {
    id: 19,
    question: "What are the two parts of the U.S. Congress?",
    answer: "<ul><li>Senate and House (of Representatives)</li></ul>",
    category: "System of Government",
    reference: { label: "Congress.gov – About Congress", href: "https://www.congress.gov/about" }
  },
  {
    id: 20,
    question: "Name one power of the U.S. Congress.",//*
    answer: "<ul><li>Writes laws</li><li>Declares war</li><li>Makes the federal budget</li></ul>",
    category: "System of Government",
    reference: { label: "Congress.gov – Powers of Congress", href: "https://www.congress.gov/about" }
  },
  {
    id: 21,
    question: "How many U.S. senators are there?",
    answer: "<ul><li>One hundred (100)</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – Senators", href: "https://www.senate.gov/senators/index.htm" }
  },
  {
    id: 22,
    question: "How long is a term for a U.S. senator?",
    answer: "<ul><li>Six (6) years</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – About the Senate", href: "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm" }
  },
  {
    id: 23,
    question: "Who is one of your state's U.S. senators now?",
    answer: "<p><em>Answers will vary.</em> District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. senators.</p>",
    category: "System of Government",
    reference: { label: "Senate.gov – Find Your Senators", href: "https://www.senate.gov/senators/senators-contact.htm" }
  },
  {
    id: 24,
    question: "How many voting members are in the House of Representatives?",
    answer: "<ul><li>Four hundred thirty-five (435)</li></ul>",
    category: "System of Government",
    reference: { label: "House.gov – About the House", href: "https://www.house.gov/the-house-explained" }
  },
  {
    id: 25,
    question: "How long is a term for a member of the House of Representatives?",
    answer: "<ul><li>Two (2) years</li></ul>",
    category: "System of Government",
    reference: { label: "House.gov – The House Explained", href: "https://www.house.gov/the-house-explained" }
  },
  {
    id: 26,
    question: "Why do U.S. representatives serve shorter terms than U.S. senators?",
    answer: "<ul><li>To more closely follow public opinion</li></ul>",
    category: "System of Government",
    reference: { label: "House.gov – The House Explained", href: "https://www.house.gov/the-house-explained" }
  },
  {
    id: 27,
    question: "How many senators does each state have?",
    answer: "<ul><li>Two (2)</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – About the Senate", href: "https://www.senate.gov/about/index.htm" }
  },
  {
    id: 28,
    question: "Why does each state have two senators?",
    answer: "<ul><li>Equal representation (for small states)</li><li>The Great Compromise (Connecticut Compromise)</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – Origins of the Senate", href: "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm" }
  },
  {
    id: 29,
    question: "Name your U.S. representative.",
    answer: "<p><em>Answers will vary.</em> Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner.</p>",
    category: "System of Government",
    reference: { label: "House.gov – Find Your Representative", href: "https://www.house.gov/representatives/find-your-representative" }
  },
  {
    id: 30,
    question: "What is the name of the Speaker of the House of Representatives now?",
    answer: "<p>Visit <a href='https://www.house.gov/leadership' target='_blank'>House Leadership</a> for the current name of the Speaker of the House of Representatives.</p>",
    category: "System of Government",
    reference: { label: "House Leadership", href: "https://www.house.gov/leadership" }
  },
  {
    id: 31,
    question: "Who does a U.S. senator represent?",
    answer: "<ul><li>Citizens of their state</li><li>The people of their state</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – About the Senate", href: "https://www.senate.gov/about/index.htm" }
  },
  {
    id: 32,
    question: "Who elects U.S. senators?",
    answer: "<ul><li>Citizens from their state</li></ul>",
    category: "System of Government",
    reference: { label: "Senate.gov – Direct Election of Senators (17th Amendment)", href: "https://www.senate.gov/about/powers-procedures/elections-voting/direct-election-senators.htm" }
  },
  {
    id: 33,
    question: "Who does a member of the House of Representatives represent?",
    answer: "<ul><li>Citizens in their (congressional) district</li><li>The people of their district</li></ul>",
    category: "System of Government",
    reference: { label: "House.gov – The House Explained", href: "https://www.house.gov/the-house-explained" }
  },
  {
    id: 34,
    question: "Who elects members of the House of Representatives?",
    answer: "<ul><li>Citizens from their (congressional) district</li></ul>",
    category: "System of Government",
    reference: { label: "House.gov – The House Explained", href: "https://www.house.gov/the-house-explained" }
  },
  {
    id: 35,
    question: "Some states have more representatives than other states. Why?",
    answer: "<ul><li>(Because of) the state's population</li><li>(Because) they have more people</li><li>(Because) some states have more people</li></ul>",
    category: "System of Government",
    reference: { label: "Census.gov – Congressional Apportionment", href: "https://www.census.gov/topics/public-sector/congressional-apportionment.html" }
  },
  {
    id: 36,
    question: "The President of the United States is elected for how many years?",//*
    answer: "<ul><li>Four (4) years</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Executive Branch", href: "https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/" }
  },
  {
    id: 37,
    question: "The President of the United States can serve only two terms. Why?",
    answer: "<ul><li>(Because of) the 22nd Amendment</li><li>To keep the president from becoming too powerful</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – 22nd Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xxii" }
  },
  {
    id: 38,
    question: "What is the name of the President of the United States now?",//*
    answer: "<p>Visit <a href='https://www.usa.gov/presidents' target='_blank'>USA Presidents</a> for the current President's name.</p>",
    category: "System of Government",
    reference: { label: "USA Presidents", href: "https://www.usa.gov/presidents" }
  },
  {
    id: 39,
    question: "What is the name of the Vice President of the United States now?",//*
    answer: "<p>Visit <a href='https://www.usa.gov/presidents' target='_blank'>USA Presidents</a> for the current Vice President's name.</p>",
    category: "System of Government",
    reference: { label: "USA Presidents", href: "https://www.usa.gov/presidents" }
  },
  {
    id: 40,
    question: "If the president can no longer serve, who becomes president?",
    answer: "<ul><li>The Vice President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – 25th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xxv" }
  },
  {
    id: 41,
    question: "Name one power of the president.",
    answer: "<ul><li>Signs bills into law</li><li>Vetoes bills</li><li>Enforces laws</li><li>Commander in Chief (of the military)</li><li>Chief diplomat</li><li>Appoints judges</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Executive Branch", href: "https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/" }
  },
  {
    id: 42,
    question: "Who is Commander in Chief of the U.S. military?",
    answer: "<ul><li>The President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Executive Branch", href: "https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/" }
  },
  {
    id: 43,
    question: "Who signs bills to become laws?",
    answer: "<ul><li>The President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "Congress.gov – How Laws Are Made", href: "https://www.congress.gov/help/legislation-and-records" }
  },
  {
    id: 44,
    question: "Who vetoes bills?", // *
    answer: "<ul><li>The President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "Congress.gov – Presidential Veto", href: "https://www.congress.gov/help/legislation-and-records" }
  },
  {
    id: 45,
    question: "Who appoints federal judges?",
    answer: "<ul><li>The President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "U.S. Courts – Judicial Appointments", href: "https://www.uscourts.gov/about-federal-courts/court-role-and-structure" }
  },
  {
    id: 46,
    question: "The executive branch has many parts. Name one.",
    answer: "<ul><li>President (of the United States)</li><li>Cabinet</li><li>Federal departments and agencies</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Executive Branch", href: "https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/" }
  },
  {
    id: 47,
    question: "What does the President's Cabinet do?",
    answer: "<ul><li>Advises the President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Cabinet", href: "https://www.whitehouse.gov/administration/cabinet/" }
  },
  {
    id: 48,
    question: "What are two Cabinet-level positions?",
    answer: "<ul><li>Attorney General</li><li>Secretary of Agriculture</li><li>Secretary of Commerce</li><li>Secretary of Defense</li><li>Secretary of Education</li><li>Secretary of Energy</li><li>Secretary of Health and Human Services</li><li>Secretary of Homeland Security</li><li>Secretary of Housing and Urban Development</li><li>Secretary of the Interior</li><li>Secretary of Labor</li><li>Secretary of State</li><li>Secretary of Transportation</li><li>Secretary of the Treasury</li><li>Secretary of Veterans Affairs</li><li>Vice President (of the United States)</li></ul>",
    category: "System of Government",
    reference: { label: "White House – The Cabinet", href: "https://www.whitehouse.gov/administration/cabinet/" }
  },
  {
    id: 49,
    question: "Why is the Electoral College important?",
    answer: "<ul><li>It decides who is elected president.</li><li>It provides a compromise between the popular election of the president and congressional selection.</li></ul>",
    category: "System of Government",
    reference: { label: "Archives.gov – Electoral College", href: "https://www.archives.gov/electoral-college/about" }
  },
  {
    id: 50,
    question: "What is one part of the judicial branch?",
    answer: "<ul><li>Supreme Court</li><li>Federal Courts</li></ul>",
    category: "System of Government",
    reference: { label: "U.S. Courts – Court Role and Structure", href: "https://www.uscourts.gov/about-federal-courts/court-role-and-structure" }
  },
  {
    id: 51,
    question: "What does the judicial branch do?",
    answer: "<ul><li>Reviews laws</li><li>Explains laws</li><li>Resolves disputes (disagreements) about the law</li><li>Decides if a law goes against the (U.S.) Constitution</li></ul>",
    category: "System of Government",
    reference: { label: "U.S. Courts – Court Role and Structure", href: "https://www.uscourts.gov/about-federal-courts/court-role-and-structure" }
  },
  {
    id: 52,
    question: "What is the highest court in the United States?",//*
    answer: "<ul><li>Supreme Court</li></ul>",
    category: "System of Government",
    reference: { label: "Supreme Court – About the Court", href: "https://www.supremecourt.gov/about/about.aspx" }
  },
  {
    id: 53,
    question: "How many seats are on the Supreme Court?",
    answer: "<ul><li>Nine (9)</li></ul>",
    category: "System of Government",
    reference: { label: "Supreme Court – About the Court", href: "https://www.supremecourt.gov/about/about.aspx" }
  },
  {
    id: 54,
    question: "How many Supreme Court justices are usually needed to decide a case?",
    answer: "<ul><li>Five (5)</li></ul>",
    category: "System of Government",
    reference: { label: "Supreme Court – About the Court", href: "https://www.supremecourt.gov/about/about.aspx" }
  },
  {
    id: 55,
    question: "How long do Supreme Court justices serve?",
    answer: "<ul><li>(For) life</li><li>Lifetime appointment</li><li>(Until) retirement</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – Article III", href: "https://constitutioncenter.org/the-constitution/articles/article-iii" }
  },
  {
    id: 56,
    question: "Supreme Court justices serve for life. Why?",
    answer: "<ul><li>To be independent (of politics)</li><li>To limit outside (political) influence</li></ul>",
    category: "System of Government",
    reference: { label: "Supreme Court – About the Court", href: "https://www.supremecourt.gov/about/about.aspx" }
  },
  {
    id: 57,
    question: "Who is the Chief Justice of the United States now?",
    answer: "<p>Visit <a href='https://www.supremecourt.gov/about/justices.aspx' target='_blank'>About the Supreme Court</a> for the current Chief Justice's name.</p>",
    category: "System of Government",
    reference: { label: "About the Supreme Court", href: "https://www.supremecourt.gov/about/justices.aspx" }
  },
  {
    id: 58,
    question: "Name one power that is only for the federal government.",
    answer: "<ul><li>Print paper money</li><li>Mint coins</li><li>Declare war</li><li>Create an army</li><li>Make treaties</li><li>Set foreign policy</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – Federalism", href: "https://constitutioncenter.org/learn/educational-resources/federalism" }
  },
  {
    id: 59,
    question: "Name one power that is only for the states.",
    answer: "<ul><li>Provide schooling and education</li><li>Provide protection (police)</li><li>Provide safety (fire departments)</li><li>Give a driver's license</li><li>Approve zoning and land use</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – 10th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-x" }
  },
  {
    id: 60,
    question: "What is the purpose of the 10th Amendment?",
    answer: "<ul><li>(It states that the) powers not given to the federal government belong to the states or to the people.</li></ul>",
    category: "System of Government",
    reference: { label: "Constitution Center – 10th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-x" }
  },
  {
    id: 61,
    question: "Who is the governor of your state now?",//*
    answer: "<p><em>Answers will vary.</em> District of Columbia residents should answer that D.C. does not have a governor.</p>",
    category: "System of Government",
    reference: { label: "NGA – Find Your Governor", href: "https://www.nga.org/governors/" }
  },
  {
    id: 62,
    question: "What is the capital of your state?",
    answer: "<p><em>Answers will vary.</em> District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.</p>",
    category: "System of Government",
    reference: { label: "USA.gov – State Governments", href: "https://www.usa.gov/state-governments" }
  },

  // C: Rights and Responsibilities (Q63–Q72)

  {
    id: 63,
    question: "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    answer: "<ul><li>Citizens eighteen (18) and older (can vote).</li><li>You don't have to pay (a poll tax) to vote.</li><li>Any citizen can vote. (Women and men can vote.)</li><li>A male citizen of any race (can vote).</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "Constitution Center – Voting Rights Amendments", href: "https://constitutioncenter.org/learn/educational-resources/voting-rights" }
  },
  {
    id: 64,
    question: "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    answer: "<ul><li>Citizens</li><li>Citizens of the United States</li><li>U.S. citizens</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USA.gov – Voting and Elections", href: "https://www.usa.gov/voting" }
  },
  {
    id: 65,
    question: "What are three rights of everyone living in the United States?",
    answer: "<ul><li>Freedom of expression</li><li>Freedom of speech</li><li>Freedom of assembly</li><li>Freedom to petition the government</li><li>Freedom of religion</li><li>The right to bear arms</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "Constitution Center – First Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-i" }
  },
  {
    id: 66,
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",//*
    answer: "<ul><li>The United States</li><li>The flag</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USA.gov – Pledge of Allegiance", href: "https://www.usa.gov/national-symbols" }
  },
  {
    id: 67,
    question: "Name two promises that new citizens make in the Oath of Allegiance.",
    answer: "<ul><li>Give up loyalty to other countries</li><li>Defend the (U.S.) Constitution</li><li>Obey the laws of the United States</li><li>Serve in the military (if needed)</li><li>Serve (help, do important work for) the nation (if needed)</li><li>Be loyal to the United States</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USCIS – Oath of Allegiance", href: "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/naturalization-oath-of-allegiance-to-the-united-states-of-america" }
  },
  {
    id: 68,
    question: "How can people become United States citizens?",
    answer: "<ul><li>Naturalize</li><li>Derive citizenship</li><li>Be born in the United States (14th Amendment)</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USCIS – Citizenship", href: "https://www.uscis.gov/citizenship" }
  },
  {
    id: 69,
    question: "What are two examples of civic participation in the United States?",
    answer: "<ul><li>Vote</li><li>Run for office</li><li>Join a political party</li><li>Help with a campaign</li><li>Join a civic group</li><li>Join a community group</li><li>Give an elected official your opinion (on an issue)</li><li>Contact elected officials</li><li>Support or oppose an issue or policy</li><li>Write to a newspaper</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USA.gov – Participate in Your Government", href: "https://www.usa.gov/contact-elected-officials" }
  },
  {
    id: 70,
    question: "What is one way Americans can serve their country?",
    answer: "<ul><li>Vote</li><li>Pay taxes</li><li>Obey the law</li><li>Serve in the military</li><li>Run for office</li><li>Work for local, state, or federal government</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "USA.gov – Citizenship Responsibilities", href: "https://www.usa.gov/become-us-citizen" }
  },
  {
    id: 71,
    question: "Why is it important to pay federal taxes?",
    answer: "<ul><li>Required by law</li><li>All people pay to fund the federal government</li><li>Required by the (U.S.) Constitution (16th Amendment)</li><li>Civic duty</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "Constitution Center – 16th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xvi" }
  },
  {
    id: 72,
    question: "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    answer: "<ul><li>Required by law</li><li>Civic duty</li><li>Makes the draft fair, if needed</li></ul>",
    category: "Rights and Responsibilities",
    reference: { label: "SSS.gov – Selective Service System", href: "https://www.sss.gov/register/" }
  },

  // ── AMERICAN HISTORY ─────────────────────────────────────────────────────────
  // A: Colonial Period and Independence (Q73–Q89)

  {
    id: 73,
    question: "The colonists came to America for many reasons. Name one.",
    answer: "<ul><li>Freedom</li><li>Political liberty</li><li>Religious freedom</li><li>Economic opportunity</li><li>Escape persecution</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Library of Congress – Colonial America", href: "https://www.loc.gov/classroom-materials/united-states-history-primary-source-timeline/colonial-settlement-1600-1763/" }
  },
  {
    id: 74,
    question: "Who lived in America before the Europeans arrived?",//*
    answer: "<ul><li>American Indians</li><li>Native Americans</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "BIA.gov – American Indians", href: "https://www.bia.gov/bia" }
  },
  {
    id: 75,
    question: "What group of people was taken and sold as slaves?",
    answer: "<ul><li>Africans</li><li>People from Africa</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Library of Congress – Slavery in America", href: "https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/articles-and-essays/introduction-to-the-wpa-slave-narratives/" }
  },
  {
    id: 76,
    question: "What war did the Americans fight to win independence from Britain?",
    answer: "<ul><li>American Revolution</li><li>The (American) Revolutionary War</li><li>War for (American) Independence</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "History.com – American Revolution", href: "https://www.history.com/topics/american-revolution/american-revolution-history" }
  },
  {
    id: 77,
    question: "Name one reason why the Americans declared independence from Britain.",
    answer: "<ul><li>High taxes</li><li>Taxation without representation</li><li>British soldiers stayed in Americans' houses (boarding, quartering)</li><li>They did not have self-government</li><li>Boston Massacre</li><li>Boston Tea Party (Tea Act)</li><li>Stamp Act</li><li>Sugar Act</li><li>Townshend Acts</li><li>Intolerable (Coercive) Acts</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Archives.gov – Causes of the Revolution", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 78,
    question: "Who wrote the Declaration of Independence?",//*
    answer: "<ul><li>(Thomas) Jefferson</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Archives.gov – Declaration of Independence", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 79,
    question: "When was the Declaration of Independence adopted?",
    answer: "<ul><li>July 4, 1776</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Archives.gov – Declaration of Independence", href: "https://www.archives.gov/founding-docs/declaration" }
  },
  {
    id: 80,
    question: "The American Revolution had many important events. Name one.",
    answer: "<ul><li>(Battle of) Bunker Hill</li><li>Declaration of Independence</li><li>Washington Crossing the Delaware (Battle of Trenton)</li><li>(Battle of) Saratoga</li><li>Valley Forge (Encampment)</li><li>(Battle of) Yorktown (British surrender at Yorktown)</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "History.com – American Revolution Timeline", href: "https://www.history.com/topics/american-revolution/american-revolution-history" }
  },
  {
    id: 81,
    question: "There were 13 original states. Name five.",
    answer: "<ul><li>New Hampshire</li><li>Massachusetts</li><li>Rhode Island</li><li>Connecticut</li><li>New York</li><li>New Jersey</li><li>Pennsylvania</li><li>Delaware</li><li>Maryland</li><li>Virginia</li><li>North Carolina</li><li>South Carolina</li><li>Georgia</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "History.com – Original 13 Colonies", href: "https://www.history.com/topics/colonial-america/thirteen-colonies" }
  },
  {
    id: 82,
    question: "What founding document was written in 1787?",
    answer: "<ul><li>(U.S.) Constitution</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Archives.gov – U.S. Constitution", href: "https://www.archives.gov/founding-docs/constitution" }
  },
  {
    id: 83,
    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answer: "<ul><li>(James) Madison</li><li>(Alexander) Hamilton</li><li>(John) Jay</li><li>Publius</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Library of Congress – Federalist Papers", href: "https://www.loc.gov/resource/rbc0001.2014rbc0001002/?st=gallery" }
  },
  {
    id: 84,
    question: "Why were the Federalist Papers important?",
    answer: "<ul><li>They helped people understand the (U.S.) Constitution.</li><li>They supported passing the (U.S.) Constitution.</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Library of Congress – Federalist Papers", href: "https://www.congress.gov/resources/display/content/The+Federalist+Papers" }
  },
  {
    id: 85,
    question: "Benjamin Franklin is famous for many things. Name one.",
    answer: "<ul><li>Founded the first free public libraries</li><li>First Postmaster General of the United States</li><li>Helped write the Declaration of Independence</li><li>Inventor</li><li>U.S. diplomat</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Biography.com – Benjamin Franklin", href: "https://www.biography.com/political-figure/benjamin-franklin" }
  },
  {
    id: 86,
    question: "George Washington is famous for many things. Name one.",//*
    answer: "<ul><li>\"Father of Our Country\"</li><li>First president of the United States</li><li>General of the Continental Army</li><li>President of the Constitutional Convention</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "White House – George Washington", href: "https://www.whitehouse.gov/about-the-white-house/presidents/george-washington/" }
  },
  {
    id: 87,
    question: "Thomas Jefferson is famous for many things. Name one.",
    answer: "<ul><li>Writer of the Declaration of Independence</li><li>Third president of the United States</li><li>Doubled the size of the United States (Louisiana Purchase)</li><li>First Secretary of State</li><li>Founded the University of Virginia</li><li>Writer of the Virginia Statute on Religious Freedom</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "White House – Thomas Jefferson", href: "https://www.whitehouse.gov/about-the-white-house/presidents/thomas-jefferson/" }
  },
  {
    id: 88,
    question: "James Madison is famous for many things. Name one.",
    answer: "<ul><li>\"Father of the Constitution\"</li><li>Fourth president of the United States</li><li>President during the War of 1812</li><li>One of the writers of the Federalist Papers</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "White House – James Madison", href: "https://www.whitehouse.gov/about-the-white-house/presidents/james-madison/" }
  },
  {
    id: 89,
    question: "Alexander Hamilton is famous for many things. Name one.",
    answer: "<ul><li>First Secretary of the Treasury</li><li>One of the writers of the Federalist Papers</li><li>Helped establish the First Bank of the United States</li><li>Aide to General George Washington</li><li>Member of the Continental Congress</li></ul>",
    category: "Colonial Period and Independence",
    reference: { label: "Treasury.gov – Alexander Hamilton", href: "https://home.treasury.gov/about/history/hamilton" }
  },

  // B: 1800s (Q90–Q99)

  {
    id: 90,
    question: "What territory did the United States buy from France in 1803?",
    answer: "<ul><li>Louisiana Territory</li><li>Louisiana</li></ul>",
    category: "1800s",
    reference: { label: "History.com – Louisiana Purchase", href: "https://www.history.com/topics/westward-expansion/louisiana-purchase" }
  },
  {
    id: 91,
    question: "Name one war fought by the United States in the 1800s.",
    answer: "<ul><li>War of 1812</li><li>Mexican-American War</li><li>Civil War</li><li>Spanish-American War</li></ul>",
    category: "1800s",
    reference: { label: "History.com – U.S. Wars", href: "https://www.history.com/topics/us-military-history" }
  },
  {
    id: 92,
    question: "Name the U.S. war between the North and the South.",
    answer: "<ul><li>The Civil War</li></ul>",
    category: "1800s",
    reference: { label: "History.com – Civil War", href: "https://www.history.com/topics/american-civil-war/american-civil-war-history" }
  },
  {
    id: 93,
    question: "The Civil War had many important events. Name one.",
    answer: "<ul><li>(Battle of) Fort Sumter</li><li>Emancipation Proclamation</li><li>(Battle of) Vicksburg</li><li>(Battle of) Gettysburg</li><li>Sherman's March</li><li>(Surrender at) Appomattox</li><li>(Battle of) Antietam/Sharpsburg</li><li>Lincoln was assassinated.</li></ul>",
    category: "1800s",
    reference: { label: "History.com – Civil War Timeline", href: "https://www.history.com/topics/american-civil-war/american-civil-war-history" }
  },
  {
    id: 94,
    question: "Abraham Lincoln is famous for many things. Name one.",//*
    answer: "<ul><li>Freed the slaves (Emancipation Proclamation)</li><li>Saved (or preserved) the Union</li><li>Led the United States during the Civil War</li><li>16th president of the United States</li><li>Delivered the Gettysburg Address</li></ul>",
    category: "1800s",
    reference: { label: "White House – Abraham Lincoln", href: "https://www.whitehouse.gov/about-the-white-house/presidents/abraham-lincoln/" }
  },
  {
    id: 95,
    question: "What did the Emancipation Proclamation do?",
    answer: "<ul><li>Freed the slaves</li><li>Freed slaves in the Confederacy</li><li>Freed slaves in the Confederate states</li><li>Freed slaves in most Southern states</li></ul>",
    category: "1800s",
    reference: { label: "Archives.gov – Emancipation Proclamation", href: "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation" }
  },
  {
    id: 96,
    question: "What U.S. war ended slavery?",
    answer: "<ul><li>The Civil War</li></ul>",
    category: "1800s",
    reference: { label: "Constitution Center – 13th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xiii" }
  },
  {
    id: 97,
    question: "What amendment gives citizenship to all persons born in the United States?",
    answer: "<ul><li>14th Amendment</li></ul><p><em>Note (2025 version): The 14th Amendment includes the clause \"subject to the jurisdiction thereof.\"</em></p>",
    category: "1800s",
    reference: { label: "Constitution Center – 14th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xiv" }
  },
  {
    id: 98,
    question: "When did all men get the right to vote?",
    answer: "<ul><li>After the Civil War</li><li>During Reconstruction</li><li>(With the) 15th Amendment</li><li>1870</li></ul>",
    category: "1800s",
    reference: { label: "Constitution Center – 15th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xv" }
  },
  {
    id: 99,
    question: "Name one leader of the women's rights movement in the 1800s.",
    answer: "<ul><li>Susan B. Anthony</li><li>Elizabeth Cady Stanton</li><li>Sojourner Truth</li><li>Harriet Tubman</li><li>Lucretia Mott</li><li>Lucy Stone</li></ul>",
    category: "1800s",
    reference: { label: "History.com – Women's Suffrage", href: "https://www.history.com/topics/womens-history/the-fight-for-womens-suffrage" }
  },

  // C: Recent American History and Other Important Historical Information (Q100–Q118)

  {
    id: 100,
    question: "Name one war fought by the United States in the 1900s.",
    answer: "<ul><li>World War I</li><li>World War II</li><li>Korean War</li><li>Vietnam War</li><li>(Persian) Gulf War</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – U.S. Military History", href: "https://www.history.com/topics/us-military-history" }
  },
  {
    id: 101,
    question: "Why did the United States enter World War I?",
    answer: "<ul><li>Because Germany attacked U.S. (civilian) ships</li><li>To support the Allied Powers (England, France, Italy, and Russia)</li><li>To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – World War I", href: "https://www.history.com/topics/world-war-i/world-war-i-history" }
  },
  {
    id: 102,
    question: "When did all women get the right to vote?",
    answer: "<ul><li>1920</li><li>After World War I</li><li>(With the) 19th Amendment</li></ul>",
    category: "Recent American History",
    reference: { label: "Constitution Center – 19th Amendment", href: "https://constitutioncenter.org/the-constitution/amendments/amendment-xix" }
  },
  {
    id: 103,
    question: "What was the Great Depression?",
    answer: "<ul><li>Longest economic recession in modern history</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – The Great Depression", href: "https://www.history.com/topics/great-depression/great-depression-history" }
  },
  {
    id: 104,
    question: "When did the Great Depression start?",
    answer: "<ul><li>The Great Crash (1929)</li><li>Stock market crash of 1929</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – The Great Depression", href: "https://www.history.com/topics/great-depression/great-depression-history" }
  },
  {
    id: 105,
    question: "Who was president during the Great Depression and World War II?",
    answer: "<ul><li>(Franklin) Roosevelt</li></ul>",
    category: "Recent American History",
    reference: { label: "White House – Franklin D. Roosevelt", href: "https://www.whitehouse.gov/about-the-white-house/presidents/franklin-d-roosevelt/" }
  },
  {
    id: 106,
    question: "Why did the United States enter World War II?",
    answer: "<ul><li>(Bombing of) Pearl Harbor</li><li>Japanese attacked Pearl Harbor</li><li>To support the Allied Powers (England, France, and Russia)</li><li>To oppose the Axis Powers (Germany, Italy, and Japan)</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – World War II", href: "https://www.history.com/topics/world-war-ii/world-war-ii-history" }
  },
  {
    id: 107,
    question: "Dwight Eisenhower is famous for many things. Name one.",
    answer: "<ul><li>General during World War II</li><li>President at the end of (during) the Korean War</li><li>34th president of the United States</li><li>Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)</li></ul>",
    category: "Recent American History",
    reference: { label: "White House – Dwight D. Eisenhower", href: "https://www.whitehouse.gov/about-the-white-house/presidents/dwight-d-eisenhower/" }
  },
  {
    id: 108,
    question: "Who was the United States' main rival during the Cold War?",
    answer: "<ul><li>Soviet Union</li><li>USSR</li><li>Russia</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Cold War", href: "https://www.history.com/topics/cold-war/cold-war-history" }
  },
  {
    id: 109,
    question: "During the Cold War, what was one main concern of the United States?",
    answer: "<ul><li>Communism</li><li>Nuclear war</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Cold War", href: "https://www.history.com/topics/cold-war/cold-war-history" }
  },
  {
    id: 110,
    question: "Why did the United States enter the Korean War?",
    answer: "<ul><li>To stop the spread of communism</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Korean War", href: "https://www.history.com/topics/korea/korean-war" }
  },
  {
    id: 111,
    question: "Why did the United States enter the Vietnam War?",
    answer: "<ul><li>To stop the spread of communism</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Vietnam War", href: "https://www.history.com/topics/vietnam-war/vietnam-war-history" }
  },
  {
    id: 112,
    question: "What did the civil rights movement do?",
    answer: "<ul><li>Fought to end racial discrimination</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Civil Rights Movement", href: "https://www.history.com/topics/black-history/civil-rights-movement" }
  },
  {
    id: 113,
    question: "Martin Luther King, Jr. is famous for many things. Name one.", //*
    answer: "<ul><li>Fought for civil rights</li><li>Worked for equality for all Americans</li><li>Worked to ensure that people would not be judged by the color of their skin, but by the content of their character</li></ul>",
    category: "Recent American History",
    reference: { label: "MLK Memorial – King's Legacy", href: "https://www.nps.gov/mlkm/learn/index.htm" }
  },
  {
    id: 114,
    question: "Why did the United States enter the Persian Gulf War?",
    answer: "<ul><li>To force the Iraqi military from Kuwait</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – Persian Gulf War", href: "https://www.history.com/topics/middle-east/persian-gulf-war" }
  },
  {
    id: 115,
    question: "What major event happened on September 11, 2001 in the United States?",//*
    answer: "<ul><li>Terrorists attacked the United States</li><li>Terrorists took over two planes and crashed them into the World Trade Center in New York City</li><li>Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia</li><li>Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania</li></ul>",
    category: "Recent American History",
    reference: { label: "9/11 Memorial – About the 9/11 Attacks", href: "https://www.911memorial.org/learn/resources/education/educational-topics/frequently-asked-questions-about-911" }
  },
  {
    id: 116,
    question: "Name one U.S. military conflict after the September 11, 2001 attacks.",
    answer: "<ul><li>(Global) War on Terror</li><li>War in Afghanistan</li><li>War in Iraq</li></ul>",
    category: "Recent American History",
    reference: { label: "History.com – War in Afghanistan", href: "https://www.history.com/topics/21st-century/afghanistan-war-history" }
  },
  {
    id: 117,
    question: "Name one American Indian tribe in the United States.",
    answer: "<ul><li>Apache</li><li>Blackfeet</li><li>Cayuga</li><li>Cherokee</li><li>Cheyenne</li><li>Chippewa</li><li>Choctaw</li><li>Creek</li><li>Crow</li><li>Hopi</li><li>Huron</li><li>Inupiat</li><li>Lakota</li><li>Mohawk</li><li>Mohegan</li><li>Navajo</li><li>Oneida</li><li>Onondaga</li><li>Pueblo</li><li>Seminole</li><li>Seneca</li><li>Shawnee</li><li>Sioux</li><li>Teton</li><li>Tuscarora</li></ul><p><em>For a complete list of federally recognized tribes, visit <a href='https://www.bia.gov'>bia.gov</a>.</em></p>",
    category: "Recent American History",
    reference: { label: "BIA.gov – Indian Tribes", href: "https://www.bia.gov/service/tribal-leaders-directory" }
  },
  {
    id: 118,
    question: "Name one example of an American innovation.",
    answer: "<ul><li>Light bulb</li><li>Automobile (cars, combustible engine)</li><li>Skyscrapers</li><li>Airplane</li><li>Assembly line</li><li>Landing on the moon</li><li>Integrated circuit (IC)</li></ul>",
    category: "Recent American History",
    reference: { label: "Smithsonian – American Inventions", href: "https://americanhistory.si.edu/collections/subjects/inventions-technology" }
  },

  // ── SYMBOLS AND HOLIDAYS ─────────────────────────────────────────────────────
  // A: Symbols (Q119–Q124)

  {
    id: 119,
    question: "What is the capital of the United States?",
    answer: "<ul><li>Washington, D.C.</li></ul>",
    category: "Symbols",
    reference: { label: "Washington D.C. – Official Site", href: "https://dc.gov/" }
  },
  {
    id: 120,
    question: "Where is the Statue of Liberty?",
    answer: "<ul><li>New York (Harbor)</li><li>Liberty Island</li><li>Also acceptable: New Jersey, near New York City, and on the Hudson (River)</li></ul>",
    category: "Symbols",
    reference: { label: "NPS – Statue of Liberty", href: "https://www.nps.gov/stli/index.htm" }
  },
  {
    id: 121,
    question: "Why does the flag have 13 stripes?",//*
    answer: "<ul><li>(Because there were) 13 original colonies</li><li>(Because the stripes) represent the original colonies</li></ul>",
    category: "Symbols",
    reference: { label: "USA.gov – American Flag", href: "https://www.usa.gov/american-flag" }
  },
  {
    id: 122,
    question: "Why does the flag have 50 stars?",
    answer: "<ul><li>(Because there is) one star for each state</li><li>(Because) each star represents a state</li><li>(Because there are) 50 states</li></ul>",
    category: "Symbols",
    reference: { label: "USA.gov – American Flag", href: "https://www.usa.gov/american-flag" }
  },
  {
    id: 123,
    question: "What is the name of the national anthem?",
    answer: "<ul><li>The Star-Spangled Banner</li></ul>",
    category: "Symbols",
    reference: { label: "Smithsonian – The Star-Spangled Banner", href: "https://americanhistory.si.edu/star-spangled-banner" }
  },
  {
    id: 124,
    question: "The Nation's first motto was \"E Pluribus Unum.\" What does that mean?",
    answer: "<ul><li>Out of many, one</li><li>We all become one</li></ul>",
    category: "Symbols",
    reference: { label: "USA.gov – National Motto", href: "https://www.usa.gov/national-symbols" }
  },

  // B: Holidays (Q125–Q128)

  {
    id: 125,
    question: "What is Independence Day?",
    answer: "<ul><li>A holiday to celebrate U.S. independence (from Britain)</li><li>The country's birthday</li></ul>",
    category: "Holidays",
    reference: { label: "History.com – Independence Day", href: "https://www.history.com/topics/holidays/july-4th" }
  },
  {
    id: 126,
    question: "Name three national U.S. holidays.",//*
    answer: "<ul><li>New Year's Day</li><li>Martin Luther King, Jr. Day</li><li>Presidents Day (Washington's Birthday)</li><li>Memorial Day</li><li>Independence Day</li><li>Labor Day</li><li>Columbus Day</li><li>Veterans Day</li><li>Thanksgiving Day</li><li>Christmas Day</li></ul>",
    category: "Holidays",
    reference: { label: "OPM.gov – Federal Holidays", href: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }
  },
  {
    id: 127,
    question: "What is Memorial Day?",
    answer: "<ul><li>A holiday to honor soldiers who died in military service</li></ul>",
    category: "Holidays",
    reference: { label: "VA.gov – Memorial Day", href: "https://www.va.gov/opa/speceven/memday/" }
  },
  {
    id: 128,
    question: "What is Veterans Day?",
    answer: "<ul><li>A holiday to honor people in the (U.S.) military</li><li>A holiday to honor people who have served (in the U.S. military)</li></ul>",
    category: "Holidays",
    reference: { label: "VA.gov – Veterans Day", href: "https://www.va.gov/opa/vetsday/" }
  }
];


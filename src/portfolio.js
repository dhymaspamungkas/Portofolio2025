/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhymas Pamungkas",
  title: "Hi all, I'm Dhymas",
  subTitle: emoji(
    "🚀 memiliki pengalaman dalam pembuatan Web-app menggunakan JavaScript / Reactjs / Nodejs / React Native dan Basic editing dengan Canva / Capcut / Tiktok"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QjILLAelDobn1yxeRqSKoAGRzeGPBXca/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhymaspamungkas",
  linkedin: "https://www.linkedin.com/in/dhymaspamungkas/",
  gmail: "dhymas.btp@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Skill lainnya:"
    ),
    emoji("Canva"),
    emoji("Lightroom"),
    emoji("Snapseed"),
    emoji("Tiktok"),
    emoji("Capcut"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UIN Sunan Kalijaga Yogyakarta",
      logo: require("./assets/images/UIN Sunan Kalijaga.png"),
      subHeader: "Sarjana Teknik Informatika",
      duration: "September 2020 - Agustus 2024",
      desc: "Berpatisipasi dalam kegiatan Kampus Merdeka: Bangkit by Gojek, GoTo, Traveloka",
      desc: "IPK 3.34 / 4.00"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Editing dan Desain",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Entry Staff",
      company: "Pt Wahana Ottomitra Multiartha, tbk",
      companylogo: require("./assets/images/WOM.png"),
      date: "September 2024 – Present",
      desc: "Bertugas memasukkan, mengolah, dan memperbarui data ke dalam sistem atau database perusahaan secara akurat dan terstruktur.",
      descBullets: [
        "Memproses sedikitnya 20 aplikasi pelanggan per hari dalam sistem dengan cepat dan tepat.",
        "Mempertahankan tingkat akurasi 99,9% dalam entri data, sehingga mendukung pemrosesan yang tepat waktu sesuai tenggat dan standar kualitas.",
        "Memeriksa kelengkapan dan kebenaran dokumen pelanggan untuk memastikan kesesuaian dengan persyaratan operasional dan sistem.",
        "Berkoordinasi dengan kantor cabang dan manajer divisi dalam mengelola alur dokumen serta menyelesaikan ketidaksesuaian data.",
        "Mendukung peningkatan kecepatan dan akurasi proses kredit dengan memastikan seluruh pengajuan memenuhi panduan perusahaan.",
        "Memastikan ketepatan penginputan data pelanggan sekaligus melakukan pengecekan kualitas terhadap seluruh dokumen yang diterima.",
      ]
    },
    // {
    //   role: "Cloud Computing Students",
    //   company: "Bangkit by Gojek, GoTo, Traveloka",
    //   companylogo: require("./assets/images/bangkit.jpg"),
    //   date: "Februari 2023 – Agustus 2023",
    //   desc: "program pendidikan intensif kolaborasi antara Google, GoTo, Traveloka, dan mitra lainnya yang bertujuan membekali talenta muda Indonesia dengan keterampilan teknologi terkini.",
    //   descBullets: [
    //     "Mengikuti pembelajaran intensif cloud computing melalui platform ternama seperti Coursera dan Google Cloud Skills Boost dengan materi Google Cloud Platform (GCP), Kubernetes, App Engine, hingga Cloud Storage dan Database.",
    //     "Mengembangkan soft skills profesional termasuk critical thinking, leadership, manajemen waktu, serta komunikasi efektif dalam Bahasa Inggris.",
    //     "Mengerjakan proyek akhir (Capstone Project) secara tim, merancang dan membangun solusi cloud nyata yang siap diterapkan di dunia industri."
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Pengalaman",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/bangkit.jpg"),
      projectName: "Bangkit by Gojek, GoTo, Traveloka",
      projectDesc: "program pendidikan intensif kolaborasi antara Google, GoTo, Traveloka, dan mitra lainnya yang bertujuan membekali talenta muda Indonesia dengan keterampilan teknologi terkini",
      footerLink: [
        {
          name: "Sertifikat Kelulusan",
          url: "https://drive.google.com/file/d/1I46uB2PHWN8vIMS0GT7U3U7U67FefGmQ/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/courseralogo.png"),
      projectName: "Coursera",
      projectDesc: "Coursera, platform pembelajaran global yang bekerja sama dengan universitas dan perusahaan ternama. Melalui Coursera, saya mengembangkan keterampilan di bidang IT dan data science, serta memperoleh sertifikat sebagai bukti kompetensi",
      footerLink: [
        {
          name: "Sertifikat Kelulusan",
          url: "https://drive.google.com/drive/folders/1f0eP4zt9vDbsn6QGIHx89kGnnw4hz2uA?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dicoding.jpeg"),
      projectName: "Dicoding",
      projectDesc: "Dicoding, platform edukasi teknologi yang bekerja sama dengan berbagai perusahaan besar seperti Google, IBM, AWS, dan lainnya. Melalui Dicoding, saya mempelajari keterampilan praktis di bidang pemrograman dan memperoleh sertifikat resmi yang diakui industri",
      footerLink: [
        {
          name: "Sertifikat Kelulusan",
          url: "https://drive.google.com/drive/folders/186fAzvxsUAIM-Oq_wN6Pn0_iOcswyKZQ?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Desain dan Editing Projek "),
  subtitle:
    "Organisasi, Event, freelance, dan lain-lain",

  achievementsCards: [
    {
      title: "Rembuk Pemuda DIY",
      subtitle:
        "Operasi Senyumkan Yogyakarta: Semua berhak senyum, Semua layak!",
      image: require("./assets/images/coverRPD.jpeg"),
      imageAlt: "",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/drive/folders/1FmgxdHypsmIrkqxyx2CYmVrpvFuDoSWM?usp=sharing"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/rembukpemudadiy?igsh=ZDdwMms2cDJ1cXM3"
        }
      ]
    },
    {
      title: "Rembuk Pemuda DIY",
      subtitle:
        "Matchday Alert!",
      image: require("./assets/images/matchday.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/19w4TVdnWCslz3nMgrdljiDqGr0Iq_OLR/view?usp=drive_link"
        }
      ]
    },
    {
      title: "PMII Rayon Aufklarung",
      subtitle:
        "Diskusi Buku: Bumi Manusia",
      image: require("./assets/images/coverPMII.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/drive/folders/1mvgvFXPQGdu6U5kV-Zm0R3D5_v4go0w9?usp=sharing"
        }
      ]
    },
    {
      title: "PMII Rayon Aufklarung",
      subtitle:
        "Hari Kemerdekaan: 78",
      image: require("./assets/images/4.jpg"),
      imageAlt: "ogle Code-In LogoGo",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/196H0TzQhjVSx5itFf_8UZlBR1RQsahMI/view?usp=drive_link"
        }
      ]
    },
    {
      title: "PMII Rayon Aufklarung",
      subtitle:
        "Tahun Baru Islam 1445 H",
      image: require("./assets/images/5.jpg"),
      imageAlt: "ogle Code-In LogoGo",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/1tWBi1vQkqi0B1P8ZPpxMO2_XTrHjuyaT/view?usp=drive_link"
        }
      ]
    },
    {
      title: "PMII Rayon Aufklarung",
      subtitle:
        "Aufklarung Mengabdi",
      image: require("./assets/images/8.jpg"),
      imageAlt: "ogle Code-In LogoGo",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/12-F8e9XiaEgP5-VuDA9EczIIfQYpxmGU/view?usp=drive_link"
        }
      ]
    },
    {
      title: "PMII Rayon Aufklarung",
      subtitle:
        "Open PO: Korsa Anggota",
      image: require("./assets/images/41.jpg"),
      imageAlt: "ogle Code-In LogoGo",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/10RrBOz37rCygfaIBkNciyUxmPdzpiGml/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Outbond CDE",
      subtitle:
        "CDE being CDE",
      image: require("./assets/images/cde.jpg"),
      imageAlt: "ogle Code-In LogoGo",
      footerLink: [
        {
          name: "link gdrive",
          url: "https://drive.google.com/file/d/1L68SIrVBvzlF_XUw8p0phWkEILWS8DWc/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Video Editing",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1jptm_O6SMsBuAbdaKtnTNILsDQOy7d58/view?usp=drive_link",
      title: "Video Kampanye Afnan Singgih",
      description:
        "Video singkat untuk pengenalan terhadap paslon terkait saat pilkada"
    },
    {
      url: "https://drive.google.com/file/d/1foUyHDUJM3Hdlf3BO_63_Ac2opT1q_Ts/view?usp=drive_link",
      title: "Aftermovie Operasi Senyumkan Yogyakarta",
      description:
        "Video berisikan kegiatan dan keseruan bareng dengan kaum termaginalisasi"
    },
    {
      url: "https://drive.google.com/file/d/13KaZc6Iw8kJZ4qDeEtwgidPPN31JZqfo/view?usp=drive_link",
      title: "Aftermovie CDE being CDE",
      description:
        "Cuplikan singkat kegiatan Div cde di kegiatan Outbond"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+62 87824201560",
  email_address: "dhymas.btp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

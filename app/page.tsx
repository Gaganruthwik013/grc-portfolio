import Image from "next/image";

import {
  Mail,
  ArrowRight,
  Eye
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
  <h1 className="text-xl font-bold text-blue-400">
    GRC
  </h1>

  <p className="text-xs text-slate-500">
    Gagan Ruthwik Chowdary
  </p>
</div>

          <div className="hidden gap-8 md:flex text-sm text-slate-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#asu">ASU</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 md:flex-row">
        
        {/* Photo */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Gagan Ruthwik"
            width={380}
            height={380}
            className="rounded-3xl border border-slate-800 shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="mb-4 uppercase tracking-[0.3em] text-blue-400">
            Data Science • AI • Autonomous Aviation
          </p>
          <div className="mb-6">
  <p className="text-sm uppercase tracking-widest text-slate-400">
    Incoming MS Student @ Arizona State University
  </p>
</div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Building the
            <span className="text-blue-500"> Intelligence </span>
            Behind Flight
          </h1>

          <p className="mt-8 text-xl text-slate-300">
            I'm Gagan Ruthwik Chowdary, an incoming Master's student in
            Data Science, Analytics and Engineering at Arizona State
            University.
          </p>

          <p className="mt-6 text-slate-400">
            My work combines machine learning, intelligent decision systems,
            and a long-term vision of creating safer autonomous aviation
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
  href="#research"
  className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
>
  View Research
</a>

            <a
  href="#projects"
  className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
>
  View Projects
</a>
            <a
  href="/resume.pdf"
  download
  className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
>
  Download Resume
</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold text-blue-500">97%</h2>
            <p className="mt-2 text-slate-400">
              Traffic Sign Recognition Accuracy
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-500">ASU</h2>
            <p className="mt-2 text-slate-400">
              MS Data Science Admit
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-500">4+</h2>
            <p className="mt-2 text-slate-400">
              Featured Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-500">AI</h2>
            <p className="mt-2 text-slate-400">
              Aviation Research Focus
            </p>
          </div>

        </div>
      </section>

      
      {/* Vision */}
      <section
        id="research"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <h2 className="text-5xl font-bold">
          The Question That Keeps Me Awake
        </h2>

        <p className="mt-8 text-2xl text-blue-400">
          What if aircraft could make intelligent decisions that save lives?
        </p>

        <p className="mt-8 text-lg leading-relaxed text-slate-300">
          A few years ago, I discovered the Cirrus Vision Jet's Emergency
          Autoland system. The idea that an aircraft could recognize a
          critical situation and land itself safely without pilot
          intervention completely changed how I thought about aviation.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Since then, I've explored autonomous aviation, pilot assistance
          systems, air taxis, and intelligent transportation systems.
          My goal is not simply to build better aircraft — it's to help
          build the intelligence that powers them.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
  <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10">

    <p className="text-3xl font-light leading-relaxed text-slate-200">
      “I don't want to simply witness the future of aviation.
      I want to help build it.”
    </p>

    <p className="mt-6 text-blue-400">
      — GRC
    </p>

  </div>
</section>


      {/* Research Focus */}
<section
  id="research-focus"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Research Interests
    </p>

    <h2 className="text-5xl font-bold">
      Building the Future of Autonomous Aviation
    </h2>

    <p className="mt-6 max-w-3xl text-slate-400">
      My long-term goal is to combine artificial intelligence,
      machine learning, and intelligent decision systems to
      improve aviation safety, autonomy, and efficiency.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <h3 className="mb-3 text-xl font-semibold text-blue-400">
        Autonomous Aviation
      </h3>

      <p className="text-slate-400">
        Intelligent systems capable of supporting or automating
        critical aviation decisions.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <h3 className="mb-3 text-xl font-semibold text-blue-400">
        Pilot Assistance
      </h3>

      <p className="text-slate-400">
        AI-powered copilots that improve situational awareness
        and reduce pilot workload.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <h3 className="mb-3 text-xl font-semibold text-blue-400">
        Air Taxis & eVTOL
      </h3>

      <p className="text-slate-400">
        Exploring the future of urban air mobility and intelligent
        transportation systems.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <h3 className="mb-3 text-xl font-semibold text-blue-400">
        AI Safety Systems
      </h3>

      <p className="text-slate-400">
        Building trustworthy systems capable of making safer
        decisions during critical situations.
      </p>
    </div>

  </div>
</section>

      {/* Journey Timeline */}
<section className="mx-auto max-w-6xl px-6 py-24">
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Journey
    </p>

    <h2 className="text-5xl font-bold">
      From Curiosity to Research
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-4">

    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="text-blue-400 text-xl font-bold">
        2020
      </h3>

      <p className="mt-4 text-slate-300">
        First exposure to AI, smart assistants,
        and how data powers technology.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="text-blue-400 text-xl font-bold">
        2022
      </h3>

      <p className="mt-4 text-slate-300">
        Started B.Tech in Computer Science
        with Data Science & Machine Learning.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="text-blue-400 text-xl font-bold">
        2025
      </h3>

      <p className="mt-4 text-slate-300">
        Built ML and Deep Learning projects
        while exploring autonomous aviation.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 p-6">
      <h3 className="text-blue-400 text-xl font-bold">
        2026
      </h3>

      <p className="mt-4 text-slate-300">
        Beginning MS at Arizona State University
        to deepen expertise in AI and analytics.
      </p>
    </div>

  </div>
</section>


      
{/* Featured Project */}
<section
  id="projects"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Featured Project
    </p>

    <h2 className="text-5xl font-bold">
      Traffic Sign Recognition using CNN
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-2">

    {/* Left Card */}
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">

      <h3 className="mb-6 text-2xl font-semibold text-blue-400">
        Project Overview
      </h3>

      <p className="text-slate-300 leading-relaxed">
        Built an end-to-end Traffic Sign Recognition system using
        Convolutional Neural Networks (CNNs) and Transfer Learning
        on the German Traffic Sign Recognition Benchmark (GTSRB)
        dataset containing over 50,000 labeled images across
        43 traffic sign classes.
      </p>

      <p className="mt-4 leading-relaxed text-slate-300">
        The project combines image preprocessing, data augmentation,
        deep learning, explainable AI (Grad-CAM), and MobileNetV2
        transfer learning to achieve strong performance on unseen
        real-world traffic sign images.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          TensorFlow
        </span>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          CNN
        </span>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          MobileNetV2
        </span>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          Grad-CAM
        </span>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          Computer Vision
        </span>

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
          Transfer Learning
        </span>

      </div>

      {/* Why It Matters */}
      <div className="mt-8 rounded-2xl border border-slate-800 p-5">

        <h4 className="text-lg font-semibold text-blue-400">
          Why It Matters
        </h4>

        <p className="mt-3 text-slate-400">
          Traffic sign recognition is a foundational component of
          Advanced Driver Assistance Systems (ADAS) and autonomous
          vehicles. This project demonstrates how deep learning and
          computer vision can be applied to safety-critical decision
          systems operating in real-world environments.
        </p>

      </div>

    </div>

    {/* Right Card */}
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">

      <div className="mb-8">

        <h3 className="text-6xl font-bold text-blue-500">
          97%
        </h3>

        <p className="text-slate-400">
          Official Test Accuracy
        </p>

      </div>

      <div className="space-y-6">

        <div>
          <h4 className="font-semibold">
            43 Classes
          </h4>

          <p className="text-slate-400">
            Traffic sign categories classified
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            50,000+ Images
          </h4>

          <p className="text-slate-400">
            German Traffic Sign Recognition Benchmark Dataset
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            MobileNetV2
          </h4>

          <p className="text-slate-400">
            Transfer learning for improved model performance
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Explainable AI
          </h4>

          <p className="text-slate-400">
            Grad-CAM visualizations for model interpretability
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Real-World Testing
          </h4>

          <p className="text-slate-400">
            Successfully evaluated on unseen traffic sign images
          </p>
        </div>

      </div>

      <div className="mt-10 flex flex-col gap-3">

        <a
          href="/traffic-sign-report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-6 py-3 text-center font-medium hover:bg-blue-700"
        >
          View Report
        </a>

        <a
          href="https://github.com/Gaganruthwik013/Traffic-Sign-Recognition-Using-CNN-DeepLearning-/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 px-6 py-3 text-center font-medium hover:bg-slate-800"
        >
          View GitHub Repository
        </a>

      </div>

    </div>

  </div>

</section>


{/* ASU Journey */}
<section
  id="asu"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">

    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Next Chapter
    </p>

    <h2 className="text-5xl font-bold">
      Arizona State University
    </h2>

    <p className="mt-6 text-xl text-slate-300">
      Master of Science in Data Science,
      Analytics and Engineering
    </p>

    <p className="mt-2 text-slate-400">
      Computing and Decision Analytics
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      <div>
        <h3 className="text-3xl font-bold text-blue-500">
          Fall 2026
        </h3>

        <p className="text-slate-400">
          Program Start
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-blue-500">
          MS
        </h3>

        <p className="text-slate-400">
          Graduate Studies
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-blue-500">
          AI
        </h3>

        <p className="text-slate-400">
          Research Focus
        </p>
      </div>

    </div>

    <p className="mt-10 max-w-4xl text-slate-300 leading-relaxed">
      Arizona State University represents the next step in my
      journey toward building intelligent decision systems for
      the future of aviation. Through advanced coursework in
      machine learning, analytics, optimization, and artificial
      intelligence, I aim to transform curiosity into capability.
    </p>

  </div>
</section>

{/* Education */}
<section
  id="education"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Education
    </p>

    <h2 className="text-5xl font-bold">
      Academic Journey
    </h2>
  </div>

  <div className="space-y-8">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Arizona State University
          </h3>

          <p className="mt-2 text-lg text-slate-300">
            Master of Science in Data Science,
            Analytics and Engineering
          </p>

          <p className="text-slate-400">
            Computing and Decision Analytics
          </p>
        </div>

        <div className="text-slate-400">
          Fall 2026
        </div>

      </div>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Lovely Professional University
          </h3>

          <p className="mt-2 text-lg text-slate-300">
            Bachelor of Technology
          </p>

          <p className="text-slate-400">
            Computer Science & Engineering
            (Data Science and Machine Learning)
          </p>
        </div>

        <div className="text-slate-400">
          2022 – 2026
        </div>

      </div>
    </div>

  </div>
</section>

{/* Research Portfolio */}
<section
  id="research-portfolio"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Research Portfolio
    </p>

    <h2 className="text-5xl font-bold">
      Exploring the Future of Aviation Intelligence
    </h2>

    <p className="mt-6 max-w-4xl text-slate-400">
      Beyond coursework and projects, I actively explore how
      artificial intelligence can improve aviation safety,
      autonomy, and decision-making. These research interests
      form the foundation of my long-term vision.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-bold text-blue-400">
        Emergency Autoland
      </h3>

      <p className="mt-4 text-slate-400">
        Studying systems such as the Cirrus Vision Jet
        Emergency Autoland and how intelligent systems
        can respond during critical situations.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-bold text-blue-400">
        Autonomous Aviation
      </h3>

      <p className="mt-4 text-slate-400">
        Exploring AI-driven aircraft capable of
        understanding environments, assessing risks,
        and making safer decisions.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-bold text-blue-400">
        Air Taxis & eVTOL
      </h3>

      <p className="mt-4 text-slate-400">
        Researching the future of urban air mobility,
        intelligent transportation systems, and
        scalable autonomous flight.
      </p>
    </div>

  </div>

  <div className="mt-8 grid gap-8 md:grid-cols-2">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-bold text-blue-400">
        AI Safety Systems
      </h3>

      <p className="mt-4 text-slate-400">
        Investigating decision-support systems,
        risk analysis models, and safety-focused
        artificial intelligence architectures.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-bold text-blue-400">
        Future Research Directions
      </h3>

      <p className="mt-4 text-slate-400">
        Building intelligent aviation systems that
        combine perception, prediction, reasoning,
        and autonomous decision-making.
      </p>
    </div>

  </div>

  <div className="mt-12">
    <a
  href="/research-portfolio.pdf"
  download
  className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
>
  Download Research Portfolio
</a>
  </div>
</section>


{/* Research Archive */}
<section
  id="archive"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Research Archive
    </p>

    <h2 className="text-5xl font-bold">
      Documents & Publications
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-xl font-bold">
        Research Portfolio
      </h3>

      <p className="mt-4 text-slate-400">
        Autonomous Aviation Intelligence Systems:
        Research Vision and Future Roadmap.
      </p>

      <a
  href="/research-portfolio.pdf"
  download
  className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
>
  Download PDF
</a>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-xl font-bold">
        Resume
      </h3>

      <p className="mt-4 text-slate-400">
        Academic background, projects,
        certifications and technical skills.
      </p>

      <a
  href="/resume.pdf"
  download
  className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
>
  Download Resume
</a>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-xl font-bold">
        Statement of Purpose
      </h3>

      <p className="mt-4 text-slate-400">
        Motivation, research goals,
        and future vision.
      </p>

      <a
  href="/sop.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
>
  View SOP
</a>
    </div>

  </div>
</section>

{/* Other Projects */}
<section
  id="other-projects"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Featured Work
    </p>

    <h2 className="text-5xl font-bold">
      Projects & Applications
    </h2>

    <p className="mt-4 text-slate-400">
      A selection of projects spanning machine learning,
      data analytics, NLP, and AI applications.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-semibold text-blue-400">
        Airline Passenger Churn Prediction
      </h3>

      <p className="mt-4 text-slate-400">
        Machine learning project combining airline reviews,
NLP, sentiment analysis, churn prediction, and
customer segmentation to identify passengers
likely to discontinue flying with an airline.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          NLP
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          XGBoost
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          Python
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          Customer Segmentation
        </span>
        <div className="flex gap-3 mt-6">
  <a
    href="/airline-churn-report.pdf"
    target="_blank"
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
  >
    View Report
  </a>

  <a
    href="https://github.com/Gaganruthwik013/Airline-Passenger-Churn-Prediction"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-900/40"
  >
    View Repository
  </a>
</div>
      </div>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-semibold text-blue-400">
        Nyaya AI
      </h3>

      <p className="mt-4 text-slate-400">
        AI-powered legal assistance platform focused on
document understanding, intelligent automation,
and decision support for legal workflows.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          AI
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          LLM
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          Automation
        </span>

        <div className="flex gap-3 mt-6">
  <a
    href="/nyaya-ai-report.pdf"
    target="_blank"
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
  >
    View Report
  </a>

  <a
    href="https://github.com/Gaganruthwik013/Legal-AI-Advisor"
    target="_blank"
    className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-900/40"
  >
    View Repository
  </a>
</div>
      </div>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-semibold text-blue-400">
        Top Instagram Influencers Data Analysis
      </h3>

      <p className="mt-4 text-slate-400">
        Exploratory data analysis of the world's top Instagram
influencers, examining engagement rates, follower
patterns, posting behavior, and geographic trends.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          EDA
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          Tableau
        </span>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm">
          Visualization
        </span>

        <div className="flex gap-3 mt-6">
  <a
    href="/instagram-analysis-report.pdf"
    target="_blank"
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
  >
    View Report
  </a>

  <a
    href="https://github.com/Gaganruthwik013/Top-Instagram-Influencers-Data-Analysis"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-900/40"
  >
    View Repository
  </a>
</div>
      </div>
    </div>

  </div>
</section>
{/* Certifications */}
<section
  id="certifications"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Credentials
    </p>

    <h2 className="text-5xl font-bold">
      Certifications & Training
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6">

  <a
    href="https://www.coursera.org/account/accomplishments/specialization/E4LZEZQI1ZE1"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-5 top-5 text-slate-400 hover:text-blue-400 transition"
  >
    <Eye size={20} />
  </a>

  <h3 className="text-2xl font-semibold">
    Google Data Analytics
  </h3>

  <p className="mt-3 text-slate-400">
    Professional Certificate
  </p>

</div>

    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6">

  <a
    href="https://www.coursera.org/account/accomplishments/specialization/OKUGSNYC7W7O"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-5 top-5 text-slate-400 hover:text-blue-400 transition"
  >
    <Eye size={20} />
  </a>

  <h3 className="text-2xl font-semibold">
    IBM Data Science
  </h3>

  <p className="mt-3 text-slate-400">
    Professional Certificate
  </p>

</div>

    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6">

  <a
    href="https://www.theforage.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_Qnh4jBdgP27tvt5M3_1724263443458_completion_certificate.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-5 top-5 text-slate-400 hover:text-blue-400 transition"
  >
    <Eye size={20} />
  </a>

  <h3 className="text-2xl font-semibold">
    British Airways
  </h3>

  <p className="mt-3 text-slate-400">
    Data Science Job Simulation Program
  </p>

</div>

    <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6">

  <a
    href="https://unifiedmentor.com/verify-certificate/UMID05032521067"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-5 top-5 text-slate-400 hover:text-blue-400 transition"
  >
    <Eye size={20} />
  </a>

  <h3 className="text-2xl font-semibold">
    Unified Mentor
  </h3>

  <p className="mt-3 text-slate-400">
    Data Science Internship
  </p>

</div>

  </div>
</section>

{/* Academic Recognition */}
<section
  id="recognition"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="mb-12">
    <p className="mb-2 uppercase tracking-widest text-blue-400">
      Academic Recognition
    </p>

    <h2 className="text-5xl font-bold">
      Faculty Recommendations
    </h2>

    <p className="mt-6 max-w-4xl text-slate-400">
      My academic work has been formally endorsed by faculty
      mentors who supervised my coursework and technical
      development in cloud computing and deep learning.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">

      <div className="mb-4 flex items-start justify-between">

  <h3 className="text-2xl font-semibold text-blue-400">
    Cloud Computing & Virtualization
  </h3>

  <a
    href="/janpreet-singh-lor.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 transition hover:text-blue-400"
  >
    <Eye size={22} />
  </a>

</div>

      <p className="mt-2 text-slate-400">
        Recommendation by Assistant Professor Janpreet Singh
      </p>

      <ul className="mt-6 space-y-3 text-slate-300">
        <li>✓ Conceptual Clarity</li>
        <li>✓ Practical Competence</li>
        <li>✓ Technical Foundation</li>
        <li>✓ Team Collaboration</li>
        <li>✓ Graduate Study Potential</li>
      </ul>

    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">

      <div className="mb-4 flex items-start justify-between">

  <h3 className="text-2xl font-semibold text-blue-400">
    Deep Learning & AI
  </h3>

  <a
    href="/usha-mittal-lor.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 transition hover:text-blue-400"
  >
    <Eye size={22} />
  </a>

</div>

      <p className="mt-2 text-slate-400">
        Recommendation by Associate Professor Dr. Usha Mittal
      </p>

      <ul className="mt-6 space-y-3 text-slate-300">
        <li>✓ Deep Learning Knowledge</li>
        <li>✓ Intellectual Curiosity</li>
        <li>✓ Analytical Thinking</li>
        <li>✓ Independent Problem Solving</li>
        <li>✓ Research Potential</li>
      </ul>

    </div>

  </div>
</section>


{/* Contact */}

{/* Contact Section */}
<section
  id="contact"
  className="mx-auto max-w-6xl px-6 py-32 text-center"
>

  <p className="mb-3 uppercase tracking-widest text-blue-400">
    Connect
  </p>

  <h2 className="text-5xl font-bold">
    Let's Build The Future Together
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
    I'm always open to discussions about artificial intelligence,
    data science, autonomous aviation, research collaborations,
    and innovative technology ventures.
  </p>

  {/* Contact Cards */}

  <div className="mt-16 grid gap-6 md:grid-cols-3">

    {/* Email */}

    <a
      href="mailto:kgrchowdary07@gmail.com"
      className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-left transition hover:border-blue-500 hover:bg-slate-900"
    >
      <Mail className="mb-5 text-blue-400" size={30} />

      <h3 className="text-xl font-semibold">
        Email
      </h3>

      <p className="mt-2 text-slate-400">
        Contact me directly regarding research,
        opportunities, or collaborations.
      </p>

      <p className="mt-4 text-blue-400">
        kgrchowdary07@gmail.com
      </p>
    </a>

    {/* LinkedIn */}

    <a
      href="https://www.linkedin.com/in/gagan-ruthwik-chowdary-kolluri-869648203?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-left transition hover:border-blue-500 hover:bg-slate-900"
    >
      <FaLinkedin className="mb-5 text-blue-400" size={30} />

      <h3 className="text-xl font-semibold">
        LinkedIn
      </h3>

      <p className="mt-2 text-slate-400">
        Professional network, academic updates,
        and future opportunities.
      </p>

      <p className="mt-4 text-blue-400">
        Connect Professionally
      </p>
    </a>

    {/* GitHub */}

    <a
      href="https://github.com/Gaganruthwik013"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-left transition hover:border-blue-500 hover:bg-slate-900"
    >
      <FaGithub className="mb-5 text-blue-400" size={30} />

      <h3 className="text-xl font-semibold">
        GitHub
      </h3>

      <p className="mt-2 text-slate-400">
        Explore machine learning projects,
        research work, and technical repositories.
      </p>

      <p className="mt-4 text-blue-400">
        View Projects
      </p>
    </a>

  </div>

  {/* CTA Button */}

  <div className="mt-16">

    <a
      href="mailto:kgrchowdary07@gmail.com"
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
    >
      Start a Conversation
      <ArrowRight size={20} />
    </a>

  </div>

  {/* Quote */}

  <div className="mx-auto mt-20 max-w-4xl">

    <blockquote className="text-2xl font-medium italic text-slate-300">
      "The future of aviation will not be defined solely by better aircraft,
      but by the intelligence that guides them."
    </blockquote>

    <p className="mt-6 text-blue-400">
      — GRC
    </p>

  </div>

</section>
    </main>
  );
}
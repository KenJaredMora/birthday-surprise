"use client";

import { ScreenTransition } from "@/components/animations/screen-transition";
import { Ambience } from "@/components/screens/Ambience";
import { Final } from "@/components/screens/Final";
import { Food } from "@/components/screens/Food";
import { Intro } from "@/components/screens/Intro";
import { Location } from "@/components/screens/Location";
import { Music } from "@/components/screens/Music";
import { Nature } from "@/components/screens/Nature";
import { Privacy } from "@/components/screens/Privacy";
import { Processing } from "@/components/screens/Processing";
import { Smell } from "@/components/screens/Smell";
import { Welcome } from "@/components/screens/Welcome";
import { FLOW } from "@/config/flow";
import { initialAnswers, type Answers, type ScreenId } from "@/types";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState<ScreenId>("welcome");
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  type EmailStatus = "idle" | "sending" | "success" | "error";

  const [emailStatus, setEmailStatus] = useState<EmailStatus>("idle");  
  //const [sendFailed, setSendFailed] = useState(false);

  function goNext() {
    const currentIndex = FLOW.indexOf(step);
    let nextIndex = currentIndex + 1;

    // Skip "location" unless glamping was chosen
    if (FLOW[nextIndex] === "location" && answers.nature !== "glamping") {
      nextIndex += 1;
    }

    setStep(FLOW[nextIndex]);
  }

  function updateAnswers(partial: Partial<Answers>) {
    setAnswers((prev) => ({ ...prev, ...partial }));
  }

  return (
    <main className="relative h-dvh w-dvw bg-[var(--color-bg)] overflow-hidden">
      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <ScreenTransition key="welcome">
            <Welcome onNext={goNext} />
          </ScreenTransition>
        )}

        {step === "intro" && (
          <ScreenTransition key="intro">
            <Intro onNext={goNext} />
          </ScreenTransition>
        )}

        {step === "food" && (
          <ScreenTransition key="food">
            <Food
              value={answers.food}
              onChange={(food) => updateAnswers({ food })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "nature" && (
          <ScreenTransition key="nature">
            <Nature
              value={answers.nature}
              onChange={(nature) => updateAnswers({ nature })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "location" && (
          <ScreenTransition key="location">
            <Location onNext={goNext} />
          </ScreenTransition>
        )}

        {step === "privacy" && (
          <ScreenTransition key="privacy">
            <Privacy
              value={answers.privacy}
              onChange={(privacy) => updateAnswers({ privacy })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "ambience" && (
          <ScreenTransition key="ambience">
            <Ambience
              value={answers.ambience}
              onChange={(ambience) => updateAnswers({ ambience })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "music" && (
          <ScreenTransition key="music">
            <Music
              value={answers.music}
              onChange={(music) => updateAnswers({ music })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "smell" && (
          <ScreenTransition key="smell">
            <Smell
              value={answers.smell}
              onChange={(smell) => updateAnswers({ smell })}
              onNext={goNext}
            />
          </ScreenTransition>
        )}

        {step === "processing" && (
          <ScreenTransition key="processing">
            <Processing
              answers={answers}
              onDone={goNext}
              //onError={() => setSendFailed(true)}
              onError={() => setEmailStatus("error")}
            />
          </ScreenTransition>
        )}

        {step === "done" && (
          <ScreenTransition key="done">
            {/* {sendFailed ? ( */}
            {emailStatus === "error" ? (
              <div className="flex flex-col items-center gap-4 text-center">
                <h2>Algo salió mal.</h2>
                <p className="font-sans text-[var(--color-text-secondary)]">
                  No se pudo enviar el correo. Revisa tu conexión e inténtalo
                  de nuevo.
                </p>
              </div>
            ) : (
              <Final />
            )}
          </ScreenTransition>
        )}
      </AnimatePresence>
    </main>
  );
}

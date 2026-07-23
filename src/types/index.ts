export type FoodChoice = "cena" | "desayuno";
export type NatureChoice = "camping" | "glamping";
export type AmbienceChoice = "fogata" | "estrellas";

export interface Answers {
  food: FoodChoice | null;
  nature: NatureChoice | null;
  privacy: number; // slider 0–100
  ambience: AmbienceChoice | null;
  music: string;
  smell: string | null;
}

export const initialAnswers: Answers = {
  food: null,
  nature: null,
  privacy: 50,
  ambience: null,
  music: "",
  smell: null,
};

/** Screen ids in flow order — drives the `step` state machine in page.tsx */
export type ScreenId =
  | "welcome"
  | "intro"
  | "food"
  | "nature"
  | "location" // only shown if nature === "glamping"
  | "privacy"
  | "ambience"
  | "music"
  | "smell"
  | "processing"
  | "done";

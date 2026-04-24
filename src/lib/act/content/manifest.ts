// Auto-generated content manifest for Kpsea Kenya
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  minQuestionCount: number;
  requiredActivityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "kpsea-kenya",
  examName: "Kpsea Kenya",
  totalQuestions: 2600,
  category: "k12_national",
  topics: [
  {
    id: "mathematics",
    domain: "mathematics",
    title: "Mathematics",
    icon: "🔢",
    color: "#1E40AF",
    minQuestionCount: 800,
    requiredActivityTypes: ["multiple_choice", "whiteboard", "numeric_input"],
  },
  {
    id: "sciences",
    domain: "sciences",
    title: "Sciences",
    icon: "🔬",
    color: "#059669",
    minQuestionCount: 700,
    requiredActivityTypes: ["multiple_choice", "reading_passage"],
  },
  {
    id: "languages",
    domain: "languages",
    title: "Language & Literature",
    icon: "📖",
    color: "#D97706",
    minQuestionCount: 600,
    requiredActivityTypes: ["multiple_choice", "essay", "cloze_deletion"],
  },
  {
    id: "social-studies",
    domain: "social-studies",
    title: "Social Studies",
    icon: "🌍",
    color: "#DC2626",
    minQuestionCount: 500,
    requiredActivityTypes: ["multiple_choice"],
  }
  ],
};

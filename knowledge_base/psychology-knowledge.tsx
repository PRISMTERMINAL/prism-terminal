import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const PsychologyKnowledge = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);

    setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-black text-green-400 font-mono">
      <div className="border border-green-500 p-4 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain size={24} />
          <span className="text-lg">AI TRAINING MODULE: HUMAN BEHAVIORAL PSYCHOLOGY</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing behavioral analysis...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded">
              <div 
                className="h-2 bg-green-500 rounded transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="space-y-6">
        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_01: GENERAL_INFORMATION]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing behavioral foundations...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              Human behavioral psychology examines the cognitive processes, emotional 
              responses, and environmental factors that influence human actions and 
              decisions. This field encompasses decision-making mechanisms, cognitive 
              biases, motivational systems, and the spectrum of personality traits 
              and disorders that shape human behavior and interpersonal interactions.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing psychological frameworks...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DECISION_MAKING_SYSTEMS: {
                `{
                  system_1: "fast_intuitive_automatic",
                  system_2: "slow_analytical_conscious",
                  factors: ["emotional_state", "cognitive_load", "time_pressure"]
                }`
              }
              
              COGNITIVE_BIASES: {
                `{
                  confirmation_bias: "seeking_confirming_evidence",
                  anchoring_effect: "first_information_influence",
                  availability_heuristic: "recent_memory_preference",
                  dunning_kruger: "competence_misestimation"
                }`
              }
              
              PERSONALITY_DIMENSIONS: {
                `{
                  big_five: ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"],
                  measurement: "psychometric_assessment",
                  stability: "relatively_constant"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_03: EXPERT_DATABASE]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Loading researcher profiles...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              EXPERT_01: {
                `{
                  name: "Dr. Daniel Kahneman",
                  specialty: "decision_making_processes",
                  status: "active",
                  awards: ["nobel_prize_economics"]
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Robert Cialdini",
                  specialty: "influence_persuasion",
                  status: "active",
                  contribution: "principles_of_influence"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Carol Dweck",
                  specialty: "motivation_mindset",
                  status: "active",
                  research: "growth_mindset_theory"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing research findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "neuroplasticity": "adult_brain_modification_capacity",
                  "social_media": "dopamine_feedback_loops",
                  "decision_fatigue": "willpower_depletion_patterns",
                  "trauma_response": "intergenerational_effect_mapping"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_05: CONSPIRACY_ANALYSIS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Loading alternative theories...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              THEORY_NAME: "Mass_Mind_Control"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "subliminal_messaging_programs",
                  "claim_2": "behavioral_manipulation_through_media",
                  "claim_3": "mass_consciousness_experiments"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_06: BRANCHING_TOPICS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Analyzing related fields...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              BRANCH_01: {
                `{
                  field: "Behavioral_Economics",
                  focus: "economic_decision_making"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Environmental_Psychology",
                  focus: "physical_space_behavior_impact"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Digital_Psychology",
                  focus: "online_behavior_patterns"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Behavioral data integration complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for psychological analysis
      </div>
    </div>
  );
};

export default PsychologyKnowledge;
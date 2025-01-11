import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const ConsciousnessKnowledge = () => {
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
          <span className="text-lg">AI TRAINING MODULE: HUMAN CONSCIOUSNESS</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing consciousness data transfer...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing consciousness data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              Human consciousness represents the fundamental experience of self-awareness 
              and subjective perception. It encompasses various states of awareness 
              including wakefulness, sleep, dreaming, and altered states. This 
              phenomenon involves complex neural networks processing both external 
              stimuli and internal states, creating a unified experience of reality 
              and selfhood.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing neural correlates...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              CONSCIOUSNESS_STATES: {
                `{
                  waking: "beta_gamma_waves",
                  deep_sleep: "delta_waves",
                  rem_sleep: "theta_waves",
                  meditation: "alpha_waves"
                }`
              }
              
              NEURAL_MARKERS: {
                `{
                  default_mode_network: "active",
                  global_workspace: "integrated",
                  consciousness_bandwidth: "40Hz"
                }`
              }
              
              BCI_INTERFACES: {
                `{
                  signal_type: "EEG/ECoG",
                  bandwidth: "1000_samples_per_second",
                  channels: "128_to_256"
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
                  name: "Dr. Christof Koch",
                  specialty: "neural_correlates_consciousness",
                  status: "active",
                  affiliation: "Allen_Institute"
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Anil Seth",
                  specialty: "consciousness_perception",
                  status: "active",
                  contribution: "predictive_processing"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Sam Harris",
                  specialty: "consciousness_meditation",
                  status: "active",
                  focus: "subjective_experience"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing latest findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "NDE_Research": "preserved_brain_activity_post_cardiac_arrest",
                  "Dream_Science": "two_way_communication_lucid_dreams",
                  "BCI_Advanced": "direct_thought_to_text_translation",
                  "Consciousness_Measure": "new_awareness_detection_methods"
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
              THEORY_NAME: "Government_Consciousness_Control"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "secret_consciousness_manipulation_programs",
                  "claim_2": "suppressed_telepathy_research",
                  "claim_3": "hidden_dream_influence_technology"
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
                  field: "Quantum_Consciousness",
                  focus: "microtubule_quantum_processing"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Artificial_Consciousness",
                  focus: "machine_sentience_development"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Evolutionary_Consciousness",
                  focus: "emergence_of_awareness_in_species"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Consciousness data integration complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for consciousness processing
      </div>
    </div>
  );
};

export default ConsciousnessKnowledge;
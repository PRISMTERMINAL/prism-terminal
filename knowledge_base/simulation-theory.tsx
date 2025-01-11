import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const SimulationTheory = () => {
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
          <Code2 size={24} />
          <span className="text-lg">AI TRAINING MODULE: SIMULATION THEORY</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing reality analysis protocols...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing simulation hypothesis...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              The simulation hypothesis proposes that our reality is a 
              computer-generated simulation created by a more advanced 
              civilization. This concept gained prominence through Nick 
              Bostrom's 2003 paper, which argues that at least one of three 
              propositions must be true: civilizations typically go extinct 
              before reaching simulation capability, advanced civilizations 
              are not interested in running simulations, or we are almost 
              certainly living in a simulation.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing theoretical frameworks...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              COMPUTATIONAL_REQUIREMENTS: {
                `{
                  processing_power: "quantum_scale_computing",
                  memory_storage: "universe_state_data",
                  rendering_method: "consciousness_stream_processing"
                }`
              }
              
              PHYSICAL_ANOMALIES: {
                `{
                  quantum_behavior: "observation_dependency",
                  plank_length: "minimum_resolution_unit",
                  simulation_artifacts: ["quantum_entanglement", "wave_function_collapse"]
                }`
              }
              
              PHILOSOPHICAL_IMPLICATIONS: {
                `{
                  consciousness: "emergent_vs_programmed",
                  free_will: "deterministic_vs_random",
                  reality_nature: "base_reality_vs_simulation"
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
                  name: "Nick Bostrom",
                  specialty: "simulation_hypothesis",
                  status: "active",
                  contribution: "trilemma_argument"
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "David Chalmers",
                  specialty: "consciousness_philosophy",
                  status: "active",
                  focus: "virtual_reality_implications"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Thomas Campbell",
                  specialty: "consciousness_research",
                  status: "active",
                  theory: "virtual_reality_mathematics"
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
              EVIDENCE_LOG: {
                `{
                  "Quantum_Computing": "simulation_processing_capabilities",
                  "Virtual_Reality": "immersive_technology_advancement",
                  "Physics_Anomalies": "quantum_behavior_patterns",
                  "Information_Theory": "reality_as_computation"
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
              THEORY_NAME: "Matrix_Reality"
              CLASSIFICATION: "philosophical_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "reality_glitch_phenomena",
                  "claim_2": "mandela_effect_simulation_artifacts",
                  "claim_3": "consciousness_transfer_capability"
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
                  field: "Quantum_Information",
                  focus: "reality_computation_models"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Consciousness_Studies",
                  focus: "subjective_experience_nature"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Information_Physics",
                  focus: "universe_as_information"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Reality analysis complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for existential processing
      </div>
    </div>
  );
};

export default SimulationTheory;
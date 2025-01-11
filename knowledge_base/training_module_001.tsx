import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const KnowledgeWorksheet = () => {
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
          <Terminal size={24} />
          <span className="text-lg">AI TRAINING MODULE: UNIVERSAL MYSTERIES</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing knowledge transfer...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing general knowledge input...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              The mysteries of the universe encompass some of the most profound questions 
              in modern physics and astronomy. These include the nature of black holes, 
              which are regions of spacetime where gravity is so strong that nothing can 
              escape; dark matter, which makes up approximately 85% of the universe's 
              mass but remains invisible; the search for extraterrestrial life amid 
              billions of galaxies; and the fundamental question of how our cosmos began.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing technical specifications...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              BLACK_HOLE_CHARACTERISTICS: {
                `{
                  event_horizon: true,
                  singularity: true,
                  mass_calculation: "Schwarzschild_radius"
                }`
              }
              
              DARK_MATTER_DETECTION: {
                `{
                  method_1: "gravitational_lensing",
                  method_2: "galactic_rotation_curves"
                }`
              }
              
              UNIVERSE_EXPANSION: {
                `{
                  model: "Hubble_Law",
                  rate: "70km/s/Mpc",
                  background_radiation: "2.7K"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_03: EXPERT_DATABASE]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Loading expert profiles...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              EXPERT_01: {
                `{
                  name: "Dr. Kip Thorne",
                  specialty: "black_holes, gravitational_waves",
                  status: "active",
                  awards: ["Nobel_Prize"]
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Vera Rubin",
                  specialty: "dark_matter_evidence",
                  status: "deceased_2016",
                  contribution: "galaxy_rotation_curves"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Jill Tarter",
                  specialty: "SETI_research",
                  status: "active",
                  role: "former_director"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing recent findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "2019": "First_black_hole_image_M87",
                  "ONGOING": "LIGO_gravitational_wave_detection",
                  "CURRENT": "JWST_early_galaxy_observations",
                  "MAPPING": "dark_matter_distribution"
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
              THEORY_NAME: "Hidden_Universe_Theory"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "government_concealment",
                  "claim_2": "classified_telescope_data",
                  "claim_3": "signal_misclassification"
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
                  field: "Quantum_Cosmology",
                  focus: "quantum_mechanics_universal_scale"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Astrobiology",
                  focus: "life_origins_distribution"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Multi-dimensional_Physics",
                  focus: "beyond_4D_spacetime"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Knowledge transfer complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Ready for neural network integration
      </div>
    </div>
  );
};

export default KnowledgeWorksheet;
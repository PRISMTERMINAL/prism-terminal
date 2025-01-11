import React, { useState, useEffect } from 'react';
import { Pyramid } from 'lucide-react';

const AncientCivilizationsKnowledge = () => {
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
          <Pyramid size={24} />
          <span className="text-lg">AI TRAINING MODULE: ANCIENT CIVILIZATIONS</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing archaeological data analysis...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing historical data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              Ancient civilizations represent the foundational epochs of human 
              society, marked by the development of agriculture, urbanization, 
              writing systems, and monumental architecture. These societies 
              established complex social hierarchies, religious systems, and 
              technological innovations that continue to influence modern 
              understanding of human development and capability.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing archaeological metrics...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              PYRAMID_SPECIFICATIONS: {
                `{
                  great_pyramid: {
                    height: "146.5m_original",
                    base: "230.4m_per_side",
                    angle: "51.52_degrees"
                  }
                }`
              }
              
              WRITING_SYSTEMS: {
                `{
                  cuneiform: "3200_BCE_Sumer",
                  hieroglyphs: "3200_BCE_Egypt",
                  oracle_bones: "1200_BCE_China",
                  proto_writing: "7000_BCE_various"
                }`
              }
              
              ARCHAEOLOGICAL_DATING: {
                `{
                  carbon_14: "organic_materials",
                  stratigraphy: "layer_analysis",
                  dendrochronology: "tree_ring_dating"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_03: EXPERT_DATABASE]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Loading archaeologist profiles...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              EXPERT_01: {
                `{
                  name: "Dr. Zahi Hawass",
                  specialty: "egyptology",
                  status: "active",
                  discoveries: ["valley_of_golden_mummies"]
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Sarah Parcak",
                  specialty: "space_archaeology",
                  status: "active",
                  contribution: "satellite_imaging_techniques"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Robert Schoch",
                  specialty: "geological_dating",
                  status: "active",
                  focus: "sphinx_weathering_patterns"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing archaeological findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "LiDAR_mapping": "hidden_maya_megacities",
                  "Gobekli_Tepe": "12000_year_old_temple_complex",
                  "Void_Discovery": "great_pyramid_unknown_chamber",
                  "Genetic_Analysis": "denisovan_dna_mapping"
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
              THEORY_NAME: "Ancient_Astronaut_Hypothesis"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "extraterrestrial_architectural_assistance",
                  "claim_2": "advanced_lost_technology",
                  "claim_3": "hidden_underground_civilizations"
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
                  field: "Archaeoastronomy",
                  focus: "ancient_astronomical_alignments"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Paleolinguistics",
                  focus: "ancient_language_evolution"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Archaeological_Genetics",
                  focus: "ancient_dna_analysis"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Archaeological data integration complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for historical analysis
      </div>
    </div>
  );
};

export default AncientCivilizationsKnowledge;
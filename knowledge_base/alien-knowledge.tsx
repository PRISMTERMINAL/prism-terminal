import React, { useState, useEffect } from 'react';
import { Satellite } from 'lucide-react';

const AlienKnowledge = () => {
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
          <Satellite size={24} />
          <span className="text-lg">AI TRAINING MODULE: EXTRATERRESTRIAL INTELLIGENCE</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing xenological data analysis...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing xenological data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              The search for extraterrestrial intelligence encompasses both 
              scientific research through projects like SETI and investigation 
              of reported encounters. This field combines astronomy, biology, 
              and information theory to assess the possibility of life beyond 
              Earth, while also documenting and analyzing reports of unusual 
              aerial phenomena.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing search parameters...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DETECTION_METHODS: {
                `{
                  radio_astronomy: "signal_detection_analysis",
                  optical_SETI: "laser_signal_search",
                  technosignatures: "industrial_pollution_markers",
                  biosignatures: "atmospheric_composition"
                }`
              }
              
              ENCOUNTER_CLASSIFICATION: {
                `{
                  close_encounters: {
                    "CE1": "visual_sighting",
                    "CE2": "physical_evidence",
                    "CE3": "occupant_observation"
                  },
                  measurement_data: ["radar_returns", "infrared_signatures", "visual_tracking"]
                }`
              }
              
              SEARCH_PARAMETERS: {
                `{
                  drake_equation_variables: ["star_formation", "planet_frequency", "life_emergence"],
                  fermi_paradox: "great_filter_hypothesis",
                  target_systems: "habitable_zone_planets"
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
                  name: "Dr. Frank Drake",
                  specialty: "SETI_pioneer",
                  status: "deceased_2022",
                  contribution: "drake_equation"
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Avi Loeb",
                  specialty: "astrobiology",
                  status: "active",
                  focus: "interstellar_objects"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Jill Tarter",
                  specialty: "SETI_research",
                  status: "active",
                  contribution: "radio_telescope_searches"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing scientific findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "Exoplanets": "potentially_habitable_worlds",
                  "Biosignatures": "phosphine_venus_atmosphere",
                  "Fast_Radio_Bursts": "unexplained_signal_patterns",
                  "UAP_Reports": "official_documentation_release"
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
              THEORY_NAME: "Government_Contact"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "recovered_craft_technology",
                  "claim_2": "ongoing_diplomatic_relations",
                  "claim_3": "underground_facility_networks"
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
                  field: "Astrobiology",
                  focus: "biological_signatures_detection"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Propulsion_Physics",
                  focus: "interstellar_travel_methods"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Communication_Theory",
                  focus: "interspecies_signal_encoding"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Xenological analysis complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for signal processing
      </div>
    </div>
  );
};

export default AlienKnowledge;
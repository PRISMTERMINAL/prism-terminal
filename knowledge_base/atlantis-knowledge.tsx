import React, { useState, useEffect } from 'react';
import { Waves } from 'lucide-react';

const AtlantisKnowledge = () => {
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
          <Waves size={24} />
          <span className="text-lg">AI TRAINING MODULE: ATLANTIS ANALYSIS</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing mythological data analysis...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing mythological data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              Atlantis represents a legendary advanced civilization first described 
              by Plato in his dialogues "Timaeus" and "Critias" (circa 360 BCE). 
              According to the account, Atlantis was a powerful island nation that 
              existed approximately 9,000 years before Plato's time, ultimately 
              sinking beneath the ocean due to natural disasters and divine 
              punishment.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing historical specifications...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              PLATONIC_DESCRIPTION: {
                `{
                  location: "beyond_pillars_of_hercules",
                  size: "larger_than_libya_asia_combined",
                  layout: "concentric_rings_water_land",
                  architecture: "advanced_engineering_capabilities"
                }`
              }
              
              GEOLOGICAL_INDICATORS: {
                `{
                  timeframe: "11500_BCE_approximate",
                  geological_events: ["floods", "earthquakes", "subsidence"],
                  potential_locations: ["mediterranean", "atlantic", "aegean"]
                }`
              }
              
              CIVILIZATION_METRICS: {
                `{
                  technology: "advanced_metallurgy",
                  agriculture: "sophisticated_irrigation",
                  military: "naval_power",
                  population: "significant_urban_centers"
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
                  name: "Plato",
                  specialty: "primary_source",
                  status: "historical_account",
                  works: ["Timaeus", "Critias"]
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Manfred Bietak",
                  specialty: "mediterranean_archaeology",
                  status: "active",
                  research: "bronze_age_settlements"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Robert Ballard",
                  specialty: "underwater_archaeology",
                  status: "active",
                  focus: "submerged_settlements"
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
                  "Underwater_Structures": "submerged_bronze_age_settlements",
                  "Geological_Evidence": "historical_tsunami_deposits",
                  "Archaeological_Finds": "advanced_bronze_age_technologies",
                  "Satellite_Imaging": "potential_submerged_sites"
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
              THEORY_NAME: "Advanced_Atlantean_Civilization"
              CLASSIFICATION: "mythological_interpretation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "advanced_energy_technology",
                  "claim_2": "crystal_based_power_systems",
                  "claim_3": "genetic_engineering_capabilities"
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
                  field: "Bronze_Age_Collapse",
                  focus: "civilizational_decline_patterns"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Underwater_Archaeology",
                  focus: "submerged_site_detection"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Myth_Analysis",
                  focus: "historical_basis_legends"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Mythological analysis complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for legend processing
      </div>
    </div>
  );
};

export default AtlantisKnowledge;
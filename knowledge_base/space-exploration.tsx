import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const SpaceExplorationKnowledge = () => {
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
          <Rocket size={24} />
          <span className="text-lg">AI TRAINING MODULE: SPACE EXPLORATION</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing space mission data...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing exploration data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              Space exploration represents humanity's endeavor to extend presence 
              beyond Earth, encompassing robotic missions, human spaceflight, and 
              the search for extraterrestrial resources and habitable environments. 
              Current focus areas include Mars colonization, asteroid mining for 
              rare materials, and identifying potentially habitable exoplanets for 
              future exploration.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing mission specifications...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              MARS_COLONIZATION: {
                `{
                  atmospheric_pressure: "6.518_millibars",
                  gravity: "3.721_m/s²",
                  radiation_exposure: "high",
                  requirements: ["radiation_shielding", "pressurized_habitats", "water_extraction"]
                }`
              }
              
              ASTEROID_MINING: {
                `{
                  target_resources: ["platinum", "rare_earth_elements", "water"],
                  mining_methods: ["surface_mining", "shaft_mining", "magnetic_separation"],
                  challenges: ["zero_gravity", "remote_operation", "resource_processing"]
                }`
              }
              
              EXOPLANET_SEARCH: {
                `{
                  detection_methods: ["transit_photometry", "radial_velocity", "direct_imaging"],
                  key_parameters: ["stellar_type", "orbital_zone", "atmospheric_composition"],
                  habitability_index: ["temperature", "atmosphere", "liquid_water"]
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
                  name: "Dr. Robert Zubrin",
                  specialty: "mars_colonization",
                  status: "active",
                  contribution: "mars_direct_mission_architecture"
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "Dr. Philip Metzger",
                  specialty: "space_mining",
                  status: "active",
                  focus: "resource_extraction_technology"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "Dr. Sara Seager",
                  specialty: "exoplanet_research",
                  status: "active",
                  contribution: "atmospheric_biosignature_detection"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_04: RECENT_DISCOVERIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing mission findings...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              DISCOVERY_LOG: {
                `{
                  "Mars_Water": "subsurface_lake_detection",
                  "Resource_Mapping": "lunar_water_ice_deposits",
                  "Asteroid_Survey": "near_earth_object_composition",
                  "Exoplanet_Data": "potentially_habitable_super_earths"
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
              THEORY_NAME: "Hidden_Space_Program"
              CLASSIFICATION: "unverified_speculation"
              MAIN_CLAIMS: {
                `{
                  "claim_1": "secret_mars_bases",
                  "claim_2": "suppressed_alien_contact",
                  "claim_3": "classified_propulsion_technology"
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
                  field: "Space_Manufacturing",
                  focus: "zero_gravity_production_methods"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Space_Medicine",
                  focus: "long_term_microgravity_effects"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Space_Law",
                  focus: "extraterrestrial_resource_rights"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Space exploration data integration complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for mission analysis
      </div>
    </div>
  );
};

export default SpaceExplorationKnowledge;
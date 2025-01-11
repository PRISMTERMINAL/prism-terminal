import React, { useState, useEffect } from 'react';
import { FileSearch } from 'lucide-react';

const NineElevenAnalysis = () => {
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
          <FileSearch size={24} />
          <span className="text-lg">AI TRAINING MODULE: 9/11 HISTORICAL ANALYSIS</span>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Initializing historical data analysis...</span>
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
            <span className="text-yellow-400">{">>>"}</span> Processing historical context...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              The events of September 11, 2001, represent one of the most 
              significant and tragic moments in modern history, resulting in 
              the loss of 2,977 innocent lives. The official investigation 
              was conducted by multiple agencies, while various alternative 
              theories have emerged in subsequent years, leading to ongoing 
              debates about aspects of the events.
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_02: TECHNICAL_PARAMETERS]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Processing investigation data...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              OFFICIAL_INVESTIGATIONS: {
                `{
                  9/11_Commission: "2002_to_2004",
                  NIST_Studies: "2002_to_2008",
                  FBI_Investigation: "PENTTBOM"
                }`
              }
              
              STRUCTURAL_ANALYSIS: {
                `{
                  building_design: "tube_frame_construction",
                  impact_assessment: "structural_damage_patterns",
                  materials_study: "steel_performance_analysis"
                }`
              }
              
              DOCUMENTATION: {
                `{
                  video_evidence: "multiple_angles",
                  eyewitness_accounts: "first_responders_civilians",
                  forensic_analysis: "debris_patterns"
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
                  name: "NIST_Research_Team",
                  specialty: "structural_engineering",
                  status: "published",
                  focus: "collapse_mechanism_analysis"
                }`
              }
              
              EXPERT_02: {
                `{
                  name: "9/11_Commission_Members",
                  specialty: "historical_investigation",
                  status: "completed",
                  contribution: "comprehensive_report"
                }`
              }
              
              EXPERT_03: {
                `{
                  name: "FBI_Investigation_Unit",
                  specialty: "forensic_analysis",
                  status: "ongoing_monitoring",
                  focus: "evidence_compilation"
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
              ONGOING_RESEARCH: {
                `{
                  "Materials_Analysis": "continued_study_of_recovered_materials",
                  "Health_Impact": "long_term_health_effects_documentation",
                  "Historical_Records": "ongoing_document_declassification",
                  "Memorial_Efforts": "preservation_of_artifacts_testimonies"
                }`
              }
            </pre>
          </div>
        </div>

        <div className="border border-green-500 p-4">
          <div className="text-green-300 mb-2">[SECTION_05: ALTERNATIVE_THEORIES]</div>
          <div className="opacity-80">
            <span className="text-yellow-400">{">>>"}</span> Loading documented theories...
            <pre className="whitespace-pre-wrap text-sm mt-2">
              THEORY_CATEGORIES: {
                `{
                  "structural_analysis": "building_collapse_mechanics",
                  "visual_evidence": "video_analysis_claims",
                  "timeline_studies": "event_sequence_analysis"
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
                  field: "Engineering_Standards",
                  focus: "building_safety_improvements"
                }`
              }
              
              BRANCH_02: {
                `{
                  field: "Emergency_Response",
                  focus: "disaster_preparedness_protocols"
                }`
              }
              
              BRANCH_03: {
                `{
                  field: "Historical_Preservation",
                  focus: "documentation_methods"
                }`
              }
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4 text-sm opacity-80">
        <span className="text-yellow-400">{">>>"}</span> Historical analysis complete
        <br />
        <span className="text-yellow-400">{">>>"}</span> Neural network ready for data processing
      </div>
    </div>
  );
};

export default NineElevenAnalysis;
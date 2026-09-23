"use client"; 

import React, { useState } from 'react';
import { Shield, Lock, AlertTriangle, FileText, Download, Eye, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AuditReportsPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showWarning, setShowWarning] = useState(true);
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  const handleRestrictedAccess = () => {
    setShowAccessDenied(true);
  };

  const auditReports = [
    {
      id: 1,
      title: 'Audit Report Q4 2024',
      date: '2024-12-01',
      type: 'IT Security',
      status: 'completed',
      confidentiality: 'high',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: ' Assessment Report 2024',
      date: '2024-11-15',
      type: 'Cybersecurity',
      status: 'completed',
      confidentiality: 'critical',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Compliance Audit 2024',
      date: '2024-10-20',
      type: 'Financial',
      status: 'completed',
      confidentiality: 'high',
      size: '1.8 MB'
    },
    {
      id: 4,
      title: ' Review Q3 2024',
      date: '2024-09-10',
      type: 'Infrastructure',
      status: 'in-progress',
      confidentiality: 'medium',
      size: '1.2 MB'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'in-progress': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getConfidentialityColor = (level) => {
    switch(level) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-300';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-300';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-300';
      default: return 'text-blue-600 bg-blue-50 border-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Access Denied Modal */}
      {showAccessDenied && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAccessDenied(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Animated Top Bar */}
            <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse"></div>
            
            {/* Content */}
            <div className="p-8">
              {/* Icon with Animation */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
                Access Denied
              </h2>
              
              {/* Subtitle */}
              <p className="text-gray-600 text-center mb-6">
                You cannot access sensitive data without proper authorization
              </p>
              
              {/* Info Box */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-red-800">Authorization Required:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Admin privileges needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Valid login credentials required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>Contact system administrator</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAccessDenied(false)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                >
                  Understood
                </button>
                <button
                  onClick={() => setShowAccessDenied(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95"
                >
                  Close
                </button>
              </div>
              
              {/* Footer Note */}
              <p className="text-center text-xs text-gray-500 mt-6">
                This action has been logged for security purposes
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 right-8 w-32 h-32 bg-red-200 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-8 w-32 h-32 bg-orange-200 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden py-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 mt-18">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">Secure Document Center</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Audit Reports &<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Compliance Documents
                </span>
              </h1>
              
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Access comprehensive audit reports covering IT security, cybersecurity assessments, and compliance reviews for PAYZONINDIA Private Limited. All documents are encrypted and access-controlled.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleRestrictedAccess}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Browse Reports
                </button>
                <button 
                  onClick={handleRestrictedAccess}
                  className="bg-blue-500/30 backdrop-blur-sm border border-blue-400/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/40 transition-all flex items-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Request Access
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-400/30">
                <div>
                  <div className="text-3xl font-bold mb-1">24+</div>
                  <div className="text-blue-200 text-sm">Total Reports</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Compliant</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-blue-200 text-sm">Secure Access</div>
                </div>
              </div>
            </div>
            
            {/* Right Image/Illustration */}
            <div className="relative hidden lg:block">
              {/* Main Illustration Card */}
              <div className="relative">
                {/* Floating Cards Animation */}
                <div className="absolute top-0 right-0 w-64 h-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-white/40 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/30 rounded"></div>
                    <div className="h-2 bg-white/30 rounded w-4/5"></div>
                    <div className="h-2 bg-white/30 rounded w-3/5"></div>
                  </div>
                </div>

                <div className="absolute top-20 left-0 w-64 h-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-6 transform -rotate-6 hover:-rotate-3 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-white/40 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/30 rounded"></div>
                    <div className="h-2 bg-white/30 rounded w-4/5"></div>
                    <div className="h-2 bg-white/30 rounded w-3/5"></div>
                  </div>
                </div>

                {/* Center Shield */}
                <div className="relative z-10 w-72 h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/30 shadow-2xl p-8 flex flex-col items-center justify-center mx-auto">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <Shield className="w-20 h-20 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">Secure Vault</h3>
                  <p className="text-blue-100 text-center text-sm">AES-256 Encrypted Storage</p>
                  
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-100">Active & Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Security Warning Banner */}
        {showWarning && (
          <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full -mr-16 -mt-16 opacity-20"></div>
            <button 
              onClick={() => setShowWarning(false)}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  ⚠️ Sensitive Information Warning
                </h3>
                <p className="text-red-700 mb-3">
                  The audit reports contained in this section include highly confidential and sensitive business information. Access is restricted to authorized personnel only.
                </p>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• All downloads are logged and monitored</li>
                  <li>• Unauthorized distribution is strictly prohibited</li>
                  <li>• Reports contain proprietary security assessments and compliance data</li>
                  <li>• Please ensure secure handling of all downloaded materials</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Access Control Notice */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800">Encrypted Storage</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">All reports are stored with AES-256 encryption</p>
            {/* Visual representation */}
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-blue-200 rounded"></div>
              <div className="h-1 flex-1 bg-blue-300 rounded"></div>
              <div className="h-1 flex-1 bg-blue-400 rounded"></div>
              <div className="h-1 flex-1 bg-blue-500 rounded"></div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800">Access Controlled</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Role-based authentication and authorization</p>
            {/* Visual representation */}
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-green-200 rounded"></div>
              <div className="h-1 flex-1 bg-green-300 rounded"></div>
              <div className="h-1 flex-1 bg-green-400 rounded"></div>
              <div className="h-1 flex-1 bg-green-500 rounded"></div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800">Audit Trail</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Complete logging of all access and downloads</p>
            {/* Visual representation */}
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-purple-200 rounded"></div>
              <div className="h-1 flex-1 bg-purple-300 rounded"></div>
              <div className="h-1 flex-1 bg-purple-400 rounded"></div>
              <div className="h-1 flex-1 bg-purple-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Filter by Year:</span>
            </div>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid gap-6 mb-8">
          {auditReports.map((report) => (
            <div 
              key={report.id}
              className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:scale-[1.01] duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Document Icon with Type-specific Color */}
                    <div className={`p-3 rounded-xl ${
                      report.type === 'IT Security' ? 'bg-blue-100' :
                      report.type === 'Cybersecurity' ? 'bg-purple-100' :
                      report.type === 'Financial' ? 'bg-green-100' :
                      'bg-orange-100'
                    }`}>
                      <FileText className={`w-8 h-8 ${
                        report.type === 'IT Security' ? 'text-blue-600' :
                        report.type === 'Cybersecurity' ? 'text-purple-600' :
                        report.type === 'Financial' ? 'text-green-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{report.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(report.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="text-sm text-gray-600">• {report.size}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(report.status)}`}>
                          {report.status === 'completed' ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Completed
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              In Progress
                            </span>
                          )}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getConfidentialityColor(report.confidentiality)}`}>
                          🔒 {report.confidentiality.toUpperCase()} Confidentiality
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">
                          {report.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Report Preview Image */}
                  <div className="hidden md:block ml-4">
                    <div className="w-24 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 shadow-md relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                          <div className="text-xs text-gray-500 font-semibold">PDF</div>
                        </div>
                      </div>
                      {/* Document lines effect */}
                      <div className="absolute top-3 left-3 right-3 space-y-2">
                        <div className="h-1 bg-gray-400/30 rounded"></div>
                        <div className="h-1 bg-gray-400/30 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-400/30 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button 
                    onClick={handleRestrictedAccess}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                  <button 
                    onClick={handleRestrictedAccess}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                </div>
              </div>

              {report.confidentiality === 'critical' && (
                <div className="bg-red-50 border-t-2 border-red-200 px-6 py-3">
                  <p className="text-sm text-red-700 font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    CRITICAL: This report contains highly sensitive information. Ensure proper authorization before accessing.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Notice */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <Shield className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">Data Protection & Compliance</h3>
              <p className="text-gray-300 mb-4">
                PAYZONINDIA Private Limited maintains strict compliance with data protection regulations and industry standards. All audit reports undergo rigorous security protocols and are accessible only to authorized stakeholders.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>SOC 2 Type II Audited</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Regular Security Assessments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
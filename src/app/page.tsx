import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import EducationTabs from '@/components/education-tabs';

export const metadata: Metadata = {
  title: 'Fukuan Hu - Academic Resume',
  description: 'Academic resume of Fukuan Hu',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* Navigation Bar */}
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <img
              src="/photo.jpg"
              alt="Fukuan Hu"
              className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover dark:border-slate-800"
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            FUKUAN HU
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+86) 16635424707
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hufukuan@bjfu.edu.cn
            </span>
          </div>
        </header>

        {/* Education Section */}
        <section id="education" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-blue-600 dark:bg-blue-500" />
            Education
          </h2>
          <EducationTabs />
        </section>

        {/* Experiences Section */}
        <section id="research" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
            Research Experiences
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Differentiable Inversion Based on 3D Radiative Transfer Acceleration Model
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Advisor: Jingyi Jiang & Jianbo Qi</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Fund by National Natural Science Foundation</p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Sep 2024 - Present
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Assessment of Land Desertification Vulnerability and Spatiotemporal Variation Analysis in the Loess Plateau
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Project Leader</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Fund by College Student Innovation and Entrepreneurship Training Program</p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  May 2022 - May 2023
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    Remote Sensing Cloud Platform Development Project
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">Project Leader</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Fund by Prof. Mingxing Qin</p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Feb 2022 - Sep 2023
                </span>
              </div>
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                <img
                  src="/project-image.png"
                  alt="Remote Sensing Cloud Platform"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-purple-600 dark:bg-purple-500" />
            Publications
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <p className="text-slate-700 dark:text-slate-300">
                Hu F & Xing S. <span className="font-semibold">"Abandoned Farmland Monitoring Platform V1.0"</span>, 2023SR0382179, Authorized.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-amber-600 dark:bg-amber-500" />
            Awards and Honors
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { award: 'Third Prize in the Esri Cup Chinese Universities GIS Software Development Contest', year: '2025' },
              { award: 'First-Class Academic Scholarship in Beijing Forestry University', year: '2025' },
              { award: 'Third Prize in the Career Planning Competition in Beijing Forestry University', year: '2025' },
              { award: 'Third Prize in the 10th Shanxi Province College Students Innovation and Entrepreneurship Competition', year: '2024' },
              { award: 'Invention Patent Award in Shanxi Agricultural University', year: '2023' },
              { award: 'Third Prize in National College Student GIS Application Skills Competition - School Level', year: '2023' },
              { award: 'Geographic Information Science Scholarship in Shanxi Agricultural University', year: '2022 & 2023' },
              { award: 'Excellent Prize in the 7th & 8th Shanxi Province College Students Innovation and Entrepreneurship Competition', year: '2021 & 2022' },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.award}</p>
                <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Service Section */}
        <section id="service" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-rose-600 dark:bg-rose-500" />
            Service
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50">Member / Academic Center, School of Forestry, BFU</h3>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Sep 2025 - Sep 2025
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50">Intern / Shanxi Provincial Forestry and Grassland Engineering Station</h3>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Jul 2024 - Aug 2024
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50">Officer / Innovation & Entrepreneurship Center, School of Resources and Environmental, SXAU</h3>
                </div>
                <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Sep 2021 - Sep 2022
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-cyan-600 dark:bg-cyan-500" />
            Skills & Interests
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {['MATLAB', 'Python', 'DART', 'LESS', 'ArcGIS', 'ENVI', 'AutoCAD', 'JavaScript', 'English (IELTS 7.0)'].map((skill) => (
                  <span key={skill} className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Table Tennis', 'Badminton', 'Reading', 'Photography'].map((interest) => (
                  <span key={interest} className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-orange-600 dark:bg-orange-500" />
            Blog
          </h2>
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-12 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <svg className="mx-auto mb-4 h-12 w-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
            </svg>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">Coming Soon</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Stay tuned for articles and research updates!
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>© 2025 Fukuan Hu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

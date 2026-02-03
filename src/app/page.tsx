import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import EducationTabs from '@/components/education-tabs';
import ResearchSection from '@/components/research-section';
import PublicationsSection from '@/components/publications-section';
import AwardsSection from '@/components/awards-section';
import ServiceSection from '@/components/service-section';
import SkillsSection from '@/components/skills-section';
import { profile } from '@/data';

export const metadata: Metadata = {
  title: `${profile.name} - Academic Resume`,
  description: `Academic resume of ${profile.name}`,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* 导航栏 */}
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* 头部：个人信息 */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover dark:border-slate-800"
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {profile.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {profile.phone}
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.email}
            </span>
          </div>
        </header>

        {/* 教育背景 */}
        <section id="education" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-blue-600 dark:bg-blue-500" />
            Education
          </h2>
          <EducationTabs />
        </section>

        {/* 研究经历 */}
        <section id="research" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
            Research Experiences
          </h2>
          <ResearchSection />
        </section>

        {/* 发表论文 */}
        <section id="publications" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-purple-600 dark:bg-purple-500" />
            Publications
          </h2>
          <PublicationsSection />
        </section>

        {/* 获奖荣誉 */}
        <section id="awards" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-amber-600 dark:bg-amber-500" />
            Awards and Honors
          </h2>
          <AwardsSection />
        </section>

        {/* 服务经历 */}
        <section id="service" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-rose-600 dark:bg-rose-500" />
            Service
          </h2>
          <ServiceSection />
        </section>

        {/* 技能兴趣 */}
        <section id="skills" className="mb-12 scroll-mt-24">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            <span className="h-8 w-1 rounded-full bg-cyan-600 dark:bg-cyan-500" />
            Skills & Interests
          </h2>
          <SkillsSection />
        </section>

        {/* Blog（占位） */}
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

        {/* 页脚 */}
        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>© 2025 {profile.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

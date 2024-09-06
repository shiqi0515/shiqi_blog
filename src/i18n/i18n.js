import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Switch Language": "Switch Language",
            "Career": "Career",
            "Life": "Life",
            "Work Experience": "Work Experience",
            "Projects": "Projects",
            "Travel": "Travel",
            "Cooking": "Cooking",
            "Shiqi Shu": "Shiqi Shu",
            "Granode Materials": "Granode Materials",
            "Frontend Developer": "Frontend Developer",
            "Part-time": "Part-time",
            "May 2024 - Present": "May 2024 - Present",
            "Description for Granode Materials": [
                "Design user-friendly web pages using WordPress and Figma.",
                "Develop and maintain website, ensuring cross-device functionality.",
                "Enhance user engagement and support company goals.",
                "Ensure compliance with web standards and best practices."
            ].join('\n'),
            "Shenzhen Tiansenfu Property Management Co., Ltd": "Shenzhen Tiansenfu Property Management Co., Ltd",
            "Full-stack Engineer": "Full-stack Engineer",
            "Seasonal": "Seasonal",
            "Jun 2023 - Aug 2023": "Jun 2023 - Aug 2023",
            "Description for Shenzhen Tiansenfu": [
                "Develop and maintain UI for corporate websites using React.",
                "Implement responsive layouts and ensure cross-browser compatibility.",
                "Participate in Agile development process and team collaboration."
            ].join('\n'),
            "Research of appropriate luminance level of monitor screens in the workplace": "Research of appropriate luminance level of monitor screens in the workplace",
            "Mar 2023 - Jun 2023": "Mar 2023 - Jun 2023",
            "Sogeti Sverige, Borlänge": "Sogeti Sverige, Borlänge",
            "Description for Research Project": [
                "Thesis project on appropriate monitor luminance levels in workplaces.",
                "Simulate eye response to screen colors using camera and image processing.",
                "Study effect of external light on screen visibility.",
                "Conduct surveys to determine optimal screen brightness for office workers."
            ].join('\n'),
            "Education": "Education",
            "Master of Science - Computer Science": "Master of Science - Computer Science",
            "Bachelor of Science - Information Systems": "Bachelor of Science - Information Systems",
            "Bachelor of Engineering - Software Engineering": "Bachelor of Engineering - Software Engineering",
            "Your education background here": "Your education background here",
            "Personal Info": "Personal Info",
            "Your personal information here": "Your personal information here",
            "Uppsala University": "Uppsala University",
            "Sep 2023 - Jun 2025": "Sep 2023 - Jun 2025",
            "Dalarna University": "Dalarna University",
            "Sep 2020 - Jun 2023": "Sep 2020 - Jun 2023",
            "Jiangxi University of Finance and Economics": "Jiangxi University of Finance and Economics",
            "Sep 2019 - Jun 2023": "Sep 2019 - Jun 2023",
            "Birthday": "Birthday",
            "15 May, 2001": "15 May, 2001",
            "Chinese Zodiac / Western Zodiac": "Chinese Zodiac / Western Zodiac",
            "Snake / Taurus": "Snake / Taurus",
            "Hometown": "Hometown",
            "Nanchang, Jiangxi Province, China": "Nanchang, Jiangxi Province, China",
            "Languages": "Languages",
            "Chinese / English": "Chinese / English",
            "Hometown Map": "Hometown Map",
            "Zodiac": "Zodiac",
            "Hobbies": "Hobbies",
            "Skiing / Cooking / Traveling": "Skiing / Cooking / Traveling",
            "Nara, Japan": "Nara,Japan",
            "Kerid Crater, Iceland": "Kerid Crater, Iceland",
            "Paris, France": "Paris,France",
            "Homemade Pizza": "Homemade Pizza",
            "Sushi Rolls": "Sushi Rolls",
            "Pad Thai": "Pad Thai",
            "Korean BBQ": "Korean BBQ",
            "Japanese Soba": "Japanese Soba",
            "Italian Pasta": "Italian Pasta",

        }
    },
    zh: {
        translation: {
            "Switch Language": "切换语言",
            "Career": "职业生涯",
            "Life": "生活",
            "Work Experience": "工作经验",
            "Projects": "项目",
            "Travel": "旅行",
            "Cooking": "烹饪",
            "Shiqi Shu": "舒诗琦",
            "Granode Materials": "Granode Materials",
            "Frontend Developer": "前端开发工程师",
            "Part-time": "兼职",
            "May 2024 - Present": "2024年5月 - 至今",
            "Description for Granode Materials": [
                "使用WordPress和Figma设计用户友好的网页。",
                "开发和维护网站，确保跨设备功能。",
                "提高用户参与度，支持公司目标。",
                "确保符合网络标准和最佳实践。"
            ].join('\n'),
            "Shenzhen Tiansenfu Property Management Co., Ltd": "深圳市天森福物业管理有限公司",
            "Full-stack Engineer": "全栈工程师",
            "Seasonal": "季节性",
            "Jun 2023 - Aug 2023": "2023年6月 - 2023年8月",
            "Description for Shenzhen Tiansenfu": [
                "使用React开发和维护公司网站用户界面。",
                "实现响应式布局，确保跨浏览器兼容性。",
                "参与敏捷开发过程和团队协作。"
            ].join('\n'),
            "Research of appropriate luminance level of monitor screens in the workplace": "工作场所显示器屏幕适当亮度水平研究",
            "Mar 2023 - Jun 2023": "2023年3月 - 2023年6月",
            "Sogeti Sverige, Borlänge": "Sogeti Sverige, Borlänge",
            "Description for Research Project": [
                "关于工作场所显示器适当亮度水平的论文项目。",
                "使用相机和图像处理模拟眼睛对屏幕颜色的反应。",
                "研究外部光线对屏幕可见度的影响。",
                "进行调查以确定办公室工作人员的最佳屏幕亮度。"
            ].join('\n'),
            "Education": "教育背景",
            "Master of Science - Computer Science": "理学硕士 - 计算机科学",
            "Bachelor of Science - Information Systems": "理学学士 - 信息系统",
            "Bachelor of Engineering - Software Engineering": "工学学士 - 软件工程",
            "Your education background here": "在这里填写您的教育背景",
            "Personal Info": "个人信息",
            "Your personal information here": "在这里填写您的个人信息",
            "Uppsala University": "乌普萨拉大学",
            "Sep 2023 - Jun 2025": "2023年9月 - 2025年6月",
            "Dalarna University": "达拉纳大学",
            "Sep 2020 - Jun 2023": "2020年9月 - 2023年6月",
            "Jiangxi University of Finance and Economics": "江西财经大学",
            "Sep 2019 - Jun 2023": "2019年9月 - 2023年6月",
            "Birthday": "生日",
            "15 May, 2001": "2001年5月15日",
            "Chinese Zodiac / Western Zodiac": "生肖 / 星座",
            "Snake / Taurus": "蛇 / 金牛座",
            "Hometown": "家乡",
            "Nanchang, Jiangxi Province, China": "中国江西省南昌市",
            "Languages": "语言",
            "Chinese / English": "中文 / 英文",
            "Hometown Map": "家乡地图",
            "Zodiac": "生肖/星座",
            "Hobbies": "爱好",
            "Skiing / Cooking / Traveling": "滑雪 / 烹饪 / 旅行",
            "Nara, Japan": "日本奈良",
            "Kerid Crater, Iceland": "冰岛克里德陨石坑",
            "Paris, France": "法国巴黎",

        }
    },
    sv: {
        translation: {
            "Switch Language": "Byt språk",
            "Career": "Karriär",
            "Life": "Liv",
            "Work Experience": "Arbetslivserfarenhet",
            "Projects": "Projekt",
            "Travel": "Resor",
            "Cooking": "Matlagning",
            "Shiqi Shu": "Shiqi Shu",
            "Granode Materials": "Granode Materials",
            "Frontend Developer": "Frontend-utvecklare",
            "Part-time": "Deltid",
            "May 2024 - Present": "Maj 2024 - Nuvarande",
            "Description for Granode Materials": [
                "Designa användarvänliga webbsidor med WordPress och Figma.",
                "Utveckla och underhålla webbplatsen, säkerställ funktionalitet på olika enheter.",
                "Förbättra användarengagemanget och säkerställ att webbplatsen stödjer företagets mål.",
                "Säkerställ efterlevnad av webbstandarder och bästa praxis inom design och utveckling."
            ].join('\n'),
            "Shenzhen Tiansenfu Property Management Co., Ltd": "Shenzhen Tiansenfu Property Management Co., Ltd",
            "Full-stack Engineer": "Fullstack-ingenjör",
            "Seasonal": "Säsongsarbete",
            "Jun 2023 - Aug 2023": "Jun 2023 - Aug 2023",
            "Description for Shenzhen Tiansenfu": [
                "Utveckla och underhålla användargränssnitt för företagets webbplatser och applikationer med React.",
                "Implementera responsiva layouter och säkerställ kompatibilitet mellan webbläsare.",
                "Delta i Agil utvecklingsprocess och teamsamarbete."
            ].join('\n'),
            "Research of appropriate luminance level of monitor screens in the workplace": "Examensarbete om lämpliga luminansnivåer för bildskärmar på arbetsplatser",
            "Mar 2023 - Jun 2023": "Mar 2023 - Jun 2023",
            "Sogeti Sverige, Borlänge": "Sogeti Sverige, Borlänge",
            "Description for Research Project": [
                "Examensarbete om lämpliga luminansnivåer för bildskärmar på arbetsplatser.",
                "Simulera ögats respons på skärmfärger med kamera och bildbehandling.",
                "Studera effekten av externt ljus på skärmens synlighet.",
                "Genomför undersökningar för att fastställa optimal skärmljusstyrka för kontorsarbetare."
            ].join('\n'),
            "Education": "Utbildning",
            "Master of Science - Computer Science": "Masterexamen i datavetenskap",
            "Bachelor of Science - Information Systems": "Kandidatexamen i informationssystem",
            "Bachelor of Engineering - Software Engineering": "Kandidatexamen i mjukvaruteknik",
            "Your education background here": "Din utbildningsbakgrund här",
            "Personal Info": "Personlig information",
            "Your personal information here": "Din personliga information här",
            "Uppsala University": "Uppsala universitet",
            "Sep 2023 - Jun 2025": "Sep 2023 - Jun 2025",
            "Dalarna University": "Högskolan Dalarna",
            "Sep 2020 - Jun 2023": "Sep 2020 - Jun 2023",
            "Jiangxi University of Finance and Economics": "Jiangxi University of Finance and Economics",
            "Sep 2019 - Jun 2023": "Sep 2019 - Jun 2023",
            "Birthday": "Födelsedag",
            "15 May, 2001": "15 maj 2001",
            "Chinese Zodiac / Western Zodiac": "Kinesiskt horoskop / Västerländskt horoskop",
            "Snake / Taurus": "Orm / Oxen",
            "Hometown": "Hemstad",
            "Nanchang, Jiangxi Province, China": "Nanchang, Jiangxi-provinsen, Kina",
            "Languages": "Språk",
            "Chinese / English": "Kinesiska / Engelska",
            "Hometown Map": "Karta över hemstaden",
            "Zodiac": "Stjärntecken",
            "Hobbies": "Hobbyer",
            "Skiing / Cooking / Traveling": "Skidåkning / Matlagning / Resor",
            "Nara, Japan": "Nara, Japan",
            "Kerid Crater, Iceland": "Kerid Crater, Iceland",
            "Paris, France": "Paris, France",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
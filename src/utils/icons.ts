import * as simpleIcons from 'simple-icons';

export const getIcon = (name: string) => {
    const normalizedName = name.toLowerCase().replace('.', '').replace('js', '');
    const iconKey = Object.keys(simpleIcons).find(key => key.toLowerCase() === `si${normalizedName}`);
    
    if (iconKey) {
        return simpleIcons[iconKey as keyof typeof simpleIcons];
    }
    
    // Manual mapping for edge cases
    const map: Record<string, string> = {
        'react': 'siReact',
        'next': 'siNextdotjs',
        'nextjs': 'siNextdotjs',
        'vue': 'siVuedotjs',
        'node': 'siNodedotjs',
        'electron': 'siElectron',
        'tailwind': 'siTailwindcss',
        'tailwind css': 'siTailwindcss',
        'typescript': 'siTypescript',
        'javascript': 'siJavascript',
        'mongodb': 'siMongodb',
        'java': 'siOpenjdk', // or siJava if available, but simple-icons usually has specific ones
        'angular': 'siAngular',
        'mysql': 'siMysql',
        'php': 'siPhp',
        'html': 'siHtml5',
        'css': 'siCss3',
        'chakra': 'siChakraui',
        'chakra ui': 'siChakraui',
        'quasar': 'siQuasar',
        'cypress': 'siCypress',
        'jest': 'siJest',
        'zustand': 'siReact', // No specific icon, fallback
        'react query': 'siReactquery',
        'react hook form': 'siReacthookform',
        'springboot': 'siSpringboot',
        'github copilot': 'siGithubcopilot',
    };

    const mappedKey = map[normalizedName];
    if (mappedKey && mappedKey in simpleIcons) {
        return simpleIcons[mappedKey as keyof typeof simpleIcons];
    }

    return null;
};

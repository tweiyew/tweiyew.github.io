import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Heading,
    Text,
    SimpleGrid,
    Stack,
    Badge,
    useColorModeValue,
    HStack,
    UnorderedList,
    ListItem,
    Button,
    Flex
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const skills = {
  "Programming Languages": ["C", "Java", "Python", "SQL", "R", "JavaScript", "TypeScript"],
  "Data Analytics & Visualisation": ["Power BI", "Tableau", "Matplotlib", "Seaborn", "NumPy", "Pandas"],
  "AI & Machine Learning": ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "Scikit-learn", "Keras", "LangChain"],
  "Web Development": ["React", "Node.js", "Chakra UI", "Flask", "FastAPI"],
  "Database & DevOps": ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Postman", "Docker"],
};

const experiences = [
    {
        title: "French Teacher",
        organization: "Ministry of Education Language Centre",
        date: "Jun 2024 – Sep 2024",
        location: "Singapore",
        description: "Taught beginner French (A1/A2) and designed content aligned with Adomania 1 and Adomania 2.",
        achievements: [
        "Taught mixed-ability secondary classes",
        "Designed slides, worksheets, and games",
        ],
    },

    {
        title: "Machine Learning Intern – FaceAI Algorithms",
        organization: "NHG x A*STAR",
        date: "May 2025 – Jul 2025",
        location: "Singapore",
        description: "Worked on real-time computer vision Remote Photoplethysmography (rPPG) pipelines for facial vital sign (heart rate / breathing rate) monitoring.",
        achievements: [
        "Optimised PyTorch + Flask rPPG pipeline by reviewing and benchmarking other state-of-the-art models",
        "Adapted ME-rPPG & RhythmMamba concepts like Temporal Normalisation, Region-Of-Interest optimisation",
        "Evaluated rPPG models on UBFC, VIPL-HR datasets with ground truths across metrics like MAE and inference latency",
        "Reduced inference time from ~10s to ~10ms"
        ],
    },
    {
        title: "Data Science & Research Intern",
        organization: "Ministry of Manpower",
        date: "Jun 2025 – Aug 2025",
        location: "Singapore",
        description: "Built ETL and dashboard pipelines for multi-year complaint & salary analytics. Cleaned and joined messy bank transaction data to internal data for feature engineering.",
        achievements: [
        "Created star schema for Power BI from 87-column flat files",
        "Built and automated self-updating dashboards for visualisation of claims and complaints data by year and sector for enforcement planning",
        "Engineered features to align noisy bank transaction data with internal complaints/claims data",
        "Applied unsupervised learning algorithms like K-Means and DBSCAN to detect anomalous salary patterns, helping enforcement teams prioritise high-risk employers",
        "Performed hypothesis testing and exploratory data analysis to surface trends for policy recommendations"
        ],
    },
];

const projects = [
    {
        title: "TikTok Music Popularity Analysis",
        date: "Jan 2024 – Apr 2024",
        link: "https://github.com/SC1015FDAD3/SC1015-FDAD-TEAM-3",
        description: "ML project to explore drivers of TikTok music virality and model prediction accuracy.",
        bullets: [
        "Performed EDA and built ML models (Linear Regression, Random Forest, Lasso)",
        "Clustered tracks using K-Means and tested significance of musical features",
        "Leveraged H2O AutoML to benchmark model performance"
        ],
        techStack: ["Python", "Scikit-learn", "H2O AutoML", "Machine Learning", "Matplotlib"]
    },

    {
        title: "Fast-Food Ordering & Management System",
        date: "Jan 2024 – Apr 2024",
        link: "https://github.com/SC2002FDADG1/SC2002-FDAD1-FOMS",
        description: "Java-based modular system for ordering and managing food across user roles.",
        bullets: [
        "Applied OOP and S.O.L.I.D principles to ensure modularity and testability",
        "Implemented 4 distinct user portals with role-based access",
        "Designed UML diagrams and conducted unit tests"
        ],
        techStack: ["Java", "OOP", "UML", "File I/O"]
    },

    {
        title: "CareerPathNow – Career Development Platform",
        date: "Aug 2024 – Nov 2024",
        link: "https://github.com/lweijiie/SC2006-Project",
        description: "Full-stack job-matching platform with personalised course recommendations.",
        bullets: [
        "Built React + Chakra UI frontend with Flask + MongoDB backend",
        "Integrated Singapore SkillsFuture API for personalised course suggestions",
        "Secured data using AES-256 encryption and JWT authentication"
        ],
        techStack: ["React", "Chakra UI", "Flask", "MongoDB", "JWT", "AES Encryption", "UML", "Postman"]
    },

    {
        title: "Global Life Expectancy Analysis (2000–2015)",
        date: "Feb 2025 – Apr 2025",
        link: "https://github.com/tweiyew/life-expectancy-analysis/tree/main?tab=readme-ov-file",
        description: "Statistical analysis of global health and economic factors influencing life expectancy.",
        bullets: [
        "Cleaned and merged WHO health data with World Bank economic data",
        "Applied correlation analysis, linear/polynomial regression, and statistical tests (ANOVA, Welch’s t-test)",
        "Identified health factors with cross-country impacts, regardless of development status"
        ],
        techStack: ["R", "ggplot2", "Statistical Analysis", "Linear Regression", "Bivariate Analysis"]
    },

    {
        title: "LLM-Powered Financial Report Assistant",
        date: "Jun 2025 – Present",
        link: "https://github.com/tweiyew/financial-report-chatbot",
        description: "LangChain-powered assistant that answers natural-language questions about financial fact sheets.",
        bullets: [
        "Integrated Gemini 2.5 via Vertex AI with FastAPI backend",
        "Designed LangChain agent with tools for calculator, PDF lookup (RAG with Chroma), and Gemini summariser"
        ],
        techStack: ["LangChain", "FastAPI", "ChromaDB", "Vertex AI", "Gemini"]
    }
];



export default function TabbedPortfolio() {
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardAltBg = useColorModeValue('gray.50', '#374151');
    const cardBorder = useColorModeValue('gray.300', 'gray.700');
    const badgeBg = useColorModeValue('gray.200', 'gray.700');
    const badgeText = useColorModeValue('gray.800', 'gray.200');
    const sectionHeading = useColorModeValue('gray.700', 'white');
    const sectionSubtext = useColorModeValue('gray.500', 'gray.400');
    const selectedTabBg = useColorModeValue('gray.200', 'gray.700');
    const hoverTabBg = useColorModeValue('gray.300', 'blue.600');
    const tabBarBg = useColorModeValue('gray.100', 'gray.900');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const tabBorderColor = useColorModeValue('gray.300', 'gray.700');
    const tabSelectedBg = useColorModeValue('gray.200', 'gray.700');
    const tabSelectedText = useColorModeValue('blue.600', 'white');
    const tabHoverBg = useColorModeValue('gray.300', 'blue.600');
    const cardText = useColorModeValue('gray.600', 'gray.300');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const dateColor = useColorModeValue('gray.500', 'gray.400');


    return (
            <Box
            bottom="0"
            zIndex="999"
            w="100%"
            // bg={useColorModeValue('gray.100', 'gray.900')}
            // borderTop="1px solid"
            // borderColor={useColorModeValue('gray.300', 'gray.700')}
            // boxShadow="md"
            >
                <Tabs
                variant="unstyled"
                isFitted
                maxW="8xl"
                mx="auto"
                >
                    <TabList
                        mb={8}
                        px={6}
                        py={2}
                        borderRadius="lg"
                        bg={tabBarBg}
                        border="1px solid"
                        borderColor={tabBorderColor}
                        boxShadow="md"
                        justifyContent="center"
                    >
                        {['Skills', 'Experience', 'Projects'].map((label) => (
                        <Tab
                            key={label}
                            fontWeight="semibold"
                            px={6}
                            py={2}
                            _selected={{
                            bg: tabSelectedBg,
                            color: tabSelectedText,
                            borderRadius: 'md',
                            fontWeight: 'bold',
                            }}
                            _hover={{
                            bg: tabHoverBg,
                            }}
                        >
                            {label}
                        </Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {/* Skills Panel */}
                        <TabPanel>
                            <Box textAlign="center" mb={12}>
                            <Heading size="xl" color={sectionHeading} mb={2}>
                                Technical Skills
                            </Heading>
                            <Text color={sectionSubtext}>
                                A comprehensive overview of my technical expertise across various domains
                            </Text>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            {Object.entries(skills).map(([category, items]) => (
                                <Box
                                key={category}
                                bg={cardBg}
                                border="1px solid"
                                borderColor={cardBorder}
                                p={6}
                                borderRadius="lg"
                                >
                                <Heading size="md" color="blue.400" mb={4}>
                                    {category}
                                </Heading>
                                <Stack direction="row" wrap="wrap" gap={2}>
                                    {items.map((skill) => (
                                    <Badge
                                        key={skill}
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                        bg={badgeBg}
                                        color={badgeText}
                                    >
                                        {skill}
                                    </Badge>
                                    ))}
                                </Stack>
                                </Box>
                            ))}
                            </SimpleGrid>
                        </TabPanel>

                        {/* Experience */}
                        <TabPanel>
                        <Box textAlign="center" mb={12}>
                            <Heading size="xl" color={sectionHeading} mb={2}>
                            Experience
                            </Heading>
                            <Text color={sectionSubtext}>
                            My professional journey and academic experiences
                            </Text>
                        </Box>

                        <SimpleGrid columns={{ base: 1 }} spacing={6}>
                            {experiences.map((exp) => (
                            <Box
                                key={exp.title}
                                p={6}
                                borderRadius="lg"
                                bg={cardAltBg}
                                border="1px solid"
                                borderColor={cardBorder}
                                boxShadow="md"
                                position="relative"
                            >
                                <Box position="absolute" top={4} right={4} textAlign="right" fontSize="sm" color={sectionSubtext}>
                                <HStack spacing={1} justify="flex-end">
                                    <FaCalendarAlt /> <Text>{exp.date}</Text>
                                </HStack>
                                <HStack spacing={1} justify="flex-end">
                                    <FaMapMarkerAlt /> <Text>{exp.location}</Text>
                                </HStack>
                                </Box>

                                <Heading size="md" color="blue.400" mb={1}>
                                {exp.title}
                                </Heading>
                                <Text fontWeight="semibold" fontSize="sm" color={sectionSubtext} mb={4}>
                                {exp.organization}
                                </Text>

                                <Text fontSize="sm" color={sectionSubtext} mb={4}>
                                {exp.description}
                                </Text>

                                <Text fontWeight="bold" mb={2}>Key Achievements:</Text>
                                <UnorderedList spacing={1} color={sectionSubtext}>
                                {exp.achievements.map((item, i) => (
                                    <ListItem key={i}>{item}</ListItem>
                                ))}
                                </UnorderedList>
                            </Box>
                            ))}
                        </SimpleGrid>
                                                        
                        </TabPanel>

                        {/* Projects */}
                        <TabPanel>

                            <Box textAlign="center" mb={12}>
                                <Heading size="xl" color={sectionHeading} mb={2}>
                                Projects
                                </Heading>
                                <Text color={sectionSubtext}>
                                Some of the more interesting things I've done in school / in my free time
                                </Text>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                {projects.map((project, index) => (
                                <Box
                                    key={project.title}
                                    bg={cardAltBg}
                                    border="1px solid"
                                    borderColor={cardBorder}
                                    borderRadius="lg"
                                    boxShadow="md"
                                    p={6}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                    minH="300px"
                                >
                                    {/* Title + Date */}
                                    <Flex justify="space-between" align="start" mb={3}>
                                    <Box>
                                        <Heading size="md" color="blue.400">
                                        {project.title}
                                        </Heading>
                                    </Box>
                                    <HStack spacing={1} fontSize="sm" color={sectionSubtext}>
                                        <FaCalendarAlt />
                                        <Text>{project.date}</Text>
                                    </HStack>
                                    </Flex>

                                    {/* Description */}
                                    <Text fontSize="sm" color={sectionSubtext} mb={2}>
                                    {project.description}
                                    </Text>

                                    {/* Bullet Points */}
                                    <UnorderedList spacing={1} fontSize="sm" color={sectionSubtext} mb={4}>
                                    {project.bullets.map((item, i) => (
                                        <ListItem key={i}>{item}</ListItem>
                                    ))}
                                    </UnorderedList>

                                    {/* Tech Stack */}
                                    <Stack direction="row" wrap="wrap" spacing={2} mb={4}>
                                    {project.techStack.map((tech, i) => (
                                        <Badge key={i} px={2} py={1} borderRadius="full" bg={badgeBg} color={badgeText}>
                                        {tech}
                                        </Badge>
                                    ))}
                                    </Stack>

                                    {/* Link Button */}
                                    <Flex justify="flex-end" mt="auto">
                                    <Button
                                        as="a"
                                        href={project.link}
                                        target="_blank"
                                        size="sm"
                                        leftIcon={<FaLink />}
                                        colorScheme="blue"
                                        variant="solid"
                                    >
                                        Link
                                    </Button>
                                    </Flex>
                                </Box>
                                ))}
                            </SimpleGrid>
                        </TabPanel>


                    </TabPanels>

                </Tabs>
                
            </Box>
    );
}

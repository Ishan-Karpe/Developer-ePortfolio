<script lang="ts">
	import SectionHeadline from "../SectionHeadline.svelte";
    import { fly, scale } from 'svelte/transition';

    let {skills} = $props();// This will be passed from the parent component, which is the main page of the application.
    
    // Easter egg state - fix TypeScript types
    let easterEggActivated = $state(false);
    let hoveredSkills = $state<number[]>([]);
    let hoverTimer = $state<ReturnType<typeof setTimeout> | null>(null);
    
    // Secret developer skills
    const secretSkills = [
        { name: "Coffee Consumption", level: "Expert Level", icon: "fas fa-coffee" },
        { name: "No Hesi Racer", level: "Certified", icon: "fas fa-bug" },
        { name: "Rapper", level: "Cuhs in Paris", icon: "fab fa-stack-overflow" },
        { name: "Midnight Coding Sessions", level: "Veteran", icon: "fas fa-moon" },
        { name: "Git Commits", level: "Hard Work To Fame", icon: "fab fa-git-alt" },
        { name: "Non-Procrastination Management", level: "Work in Progress", icon: "fas fa-hourglass-half" }
    ];
    
    function handleSkillHover(skillIndex: number) {
        if (easterEggActivated) return;
        
        // Clear existing timer
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
        
        // Add skill to hovered list if not already there
        if (!hoveredSkills.includes(skillIndex)) {
            hoveredSkills = [...hoveredSkills, skillIndex];
        }
        
        // Check if we've hovered over 3 different skills
        if (hoveredSkills.length >= 3) {
            easterEggActivated = true;
            console.log("🎉 Easter egg activated! Secret developer skills unlocked!");
            return;
        }
        
        // Reset hover sequence after 5 seconds
        hoverTimer = setTimeout(() => {
            hoveredSkills = [];
        }, 5000);
    }
    
    function resetEasterEgg() {
        easterEggActivated = false;
        hoveredSkills = [];
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
    }
</script>

<section class='mt-l'>
    <SectionHeadline sectionName='skills'>Skills</SectionHeadline>
    <div class='wrapper default-margin'>
        <div class='skills-container mt-m'>
            {#each skills as skill, index}
                <i 
                    class={skill.iconClass} 
                    title={skill.skillName}
                    role="button"
                    tabindex="0"
                    onmouseenter={() => handleSkillHover(index)}
                    class:hovered={hoveredSkills.includes(index)}
                ></i>
            {/each}
        </div>
        
        <!-- Easter Egg: Secret Developer Skills -->
        {#if easterEggActivated}
            <div class='secret-skills-container mt-l' transition:fly={{ y: 50, duration: 800 }}>
                <h3 class='secret-title'>
                    🎉 Secret Developer Skills Unlocked! 
                    <button class='reset-btn' onclick={resetEasterEgg}>×</button>
                </h3>
                <div class='secret-skills'>
                    {#each secretSkills as secretSkill}
                        <div class='secret-skill' transition:scale={{ delay: Math.random() * 500 }}>
                            <i class={secretSkill.icon}></i>
                            <div class='skill-info'>
                                <span class='skill-name'>{secretSkill.name}</span>
                                <span class='skill-level'>{secretSkill.level}</span>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</section>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .skills-container {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 16px;
        column-gap: 10px;
        justify-content: center;
    }

    i {
        font-size: 100px;
        color: black;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    i:hover {
        transform: scale(1.1);
        color: #333;
    }
    
    i.hovered {
        color: #007acc;
        transform: scale(1.05);
    }
    
    /* Easter Egg Styles */
    .secret-skills-container {
        width: 90%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        border: 2px solid gold;
    }
    
    .secret-title {
        color: white;
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        position: relative;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .reset-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        transition: background 0.3s ease;
    }
    
    .reset-btn:hover {
        background: rgba(255,255,255,0.3);
    }
    
    .secret-skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }
    
    .secret-skill {
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: transform 0.3s ease;
        border: 1px solid rgba(255,255,255,0.2);
    }
    
    .secret-skill:hover {
        transform: translateY(-5px);
        background: rgba(255,255,255,0.25);
    }
    
    .secret-skill i {
        font-size: 2.5rem;
        color: #ffd700;
        min-width: 60px;
    }
    
    .skill-info {
        display: flex;
        flex-direction: column;
    }
    
    .skill-name {
        color: white;
        font-weight: bold;
        font-size: 1.1rem;
    }
    
    .skill-level {
        color: #ffd700;
        font-size: 0.9rem;
        margin-top: 0.25rem;
    }
    
    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .secret-skills {
            grid-template-columns: 1fr;
        }
        
        .secret-skill {
            flex-direction: column;
            text-align: center;
        }
        
        .secret-title {
            font-size: 1.2rem;
        }
    }
</style>

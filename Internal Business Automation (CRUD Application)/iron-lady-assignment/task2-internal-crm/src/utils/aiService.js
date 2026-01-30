// This service simulates an AI interaction.
// In a real production environment, this would call an API like OpenAI or Gemini.

/**
 * Generates a follow-up message based on lead details.
 * @param {Object} lead - The lead object containing name, program, status, etc.
 * @returns {Promise<string>} - The generated message.
 */
export const generateFollowUp = async (lead) => {
    // Simulate API Network Delay (1.5 seconds)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const { name, program, status, background } = lead;

    const firstName = name.split(' ')[0];
    const programName = program || 'our program';
    const context = background ? `considering your background in ${background}` : 'considering your professional goals';

    // "AI" Prompt Logic simulation
    // Input: Lead background, Interested program, Current lead status
    // Tone: Professional and friendly

    let message = "";

    switch (status) {
        case 'New':
            message = `Hi ${firstName}, 

Thank you for your interest in the ${programName}. 
${context ? `Given your background (${background}), ` : ''}I believe this program would be a transformative step for your career.

I'd love to share more details. Are you available for a brief chat this week?

Best,
Iron Lady Team`;
            break;

        case 'Contacted':
            message = `Hello ${firstName},

I hope you're having a great week! 

Just following up on our recent conversation about the ${programName}. I wanted to see if you had any further thoughts or questions?

We really feel your profile aligns well with the program's objectives. Let me know if you're ready to proceed!

Warm regards,
Iron Lady Team`;
            break;

        case 'Enrolled':
            message = `Dear ${firstName},

Welcome to the ${programName}! We are absolutely thrilled to have you with us.

Your journey to excellence starts now. Please check your inbox for the onboarding details. If you need anything, we are here for you.

To your success,
Iron Lady Team`;
            break;

        default:
            message = `Hi ${firstName},

We noticed you showed interest in ${programName}. ${context}, we think you'd find great value in what we offer.

Would you like to schedule a time to discuss how we can support your growth?

Best,
Iron Lady Team`;
    }

    return message;
};

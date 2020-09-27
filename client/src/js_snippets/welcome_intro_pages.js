/* eslint-disable */
export default [
    {
        survey_id: "intro",
        title: `<span class="relative" style="top: 0.5rem;">How we handle your data</span>`,
        elements: [
            {
                type: "html_plus_popup",
                name: "how_we_handle_data",
                description: "checkbox-cards",
                holder_classes: "md:flex justify-center leading-tight mt-8 px-4 lg:px-0",
                before_holder_classes: "relative w-full md:w-1/3 px-4 mb-6 max-w-xs lg:max-w-sm mx-auto",
                before_popup: `<div class="w-12 h-12 sano-border-shine sano-border-shine-orange bg-sano-pink-light mx-auto flex items-center justify-center">
                        <svg viewBox="0 0 26 23" class="sano-svg-red-orange w-6 h-6 relative z-10">
                            <path d="M1.40039 10.5239C1.40039 9.6955 2.07196 9.02393 2.90039 9.02393H23.0939C23.9224 9.02393 24.5939 9.6955 24.5939 10.5239V20.5864C24.5939 21.4149 23.9224 22.0864 23.0939 22.0864H2.90039C2.07196 22.0864 1.40039 21.4149 1.40039 20.5864V10.5239Z" fill="none" /><path d="M7.35352 8.52393V5.87842C7.35352 3.02477 9.88094 0.711426 12.9987 0.711426C16.1164 0.711426 18.6438 3.02477 18.6438 5.87842V8.52393" fill="none" /><path d="M13.9062 17.4379C14.4084 17.1696 14.75 16.6403 14.75 16.0312C14.75 15.151 14.0365 14.4375 13.1562 14.4375C12.276 14.4375 11.5625 15.151 11.5625 16.0312C11.5625 16.6403 11.9041 17.1696 12.4062 17.4379V18.625H13.9062V17.4379Z" fill="#F7D2D2" fill-opacity="0.5" stroke-width="0.75"/>
                        </svg>
                    </div>
                    <p class="text-sano-red-orange pt-3">
                        Your data will never be shared without your permission. You can see all data that you’ve uploaded to Sano anytime on your <span class="sano-light">“My&nbsp;Data”</span>&nbsp;page. 
                    </p>`,
                popup_holder_classes: "relative w-full md:w-1/3 px-4 mb-6 max-w-xs lg:max-w-sm mx-auto",
                button_content: `<div class="w-12 h-12 sano-border-shine sano-border-shine-orange bg-sano-pink-light mx-auto flex items-center justify-center">
                        <svg viewBox="0 0 30 31" class="sano-svg-red-orange w-6 h-6 relative z-10"><path d="M29.2204 15.6448C29.2204 15.6379 29.2204 15.6311 29.2204 15.6243C29.2204 12.4425 28.2086 9.49833 26.491 7.09928L26.3609 7.05127L14.6172 15.6496L29.2204 15.6448Z" fill="#F7D2D2" fill-opacity="0.5" stroke="#F75338" stroke-width="0.75"/><circle cx="15" cy="15.6494" r="14.3809" fill="none" stroke-width="0.75"/></svg>
                    </div>
                    <p class="text-sano-red-orange pt-3">
                        <span>You can choose to allow researchers to access your data in an anonymised and aggregated form </span>
                        <span class="w-4 h-4 mr-1 ml-px bg-sano-pink rounded-full relative inline-flex items-center justify-center" style="transform: scale(1.4) translateY(-1px);">
                            <svg viewbox="0 0 6 10" class="w-2 h-2 sano-svg-burgundy">
                                <path d="M2.49599 6.57598H3.38399V4.91998C4.85999 4.69198 5.77199 3.94798 5.78399 2.71198C5.79599 1.39198 4.76399 0.47998 3.10799 0.47998C1.75199 0.47998 0.659985 1.16398 0.359985 2.39998L1.27199 2.72398C1.48799 1.88398 2.14799 1.39198 3.11999 1.39198C4.09199 1.39198 4.77599 1.87198 4.77599 2.77198C4.77599 3.80398 3.83999 4.24798 2.77199 4.24798H2.49599V6.57598ZM2.93999 9.05998C3.32399 9.05998 3.64799 8.75998 3.64799 8.36398C3.64799 7.97998 3.32399 7.67998 2.93999 7.67998C2.54399 7.67998 2.23199 7.97998 2.23199 8.36398C2.23199 8.75998 2.54399 9.05998 2.93999 9.05998Z" stroke-width="0"/>
                            </svg>
                        </span>      
                        <span>or require them to ask you each&nbsp;time.</span>
                    </p>`,
                button_aria: "You can choose to allow researchers to access your data in an anonymised and aggregated form or require them to ask you each time. Toggle show/hide annonymised & aggregated explanation.",
                popup_content: `<p class="text-sano-sm text-sano-burgundy pb-3">
                    An anonymised &amp; aggregated form means that personally identifying information is removed and data from a large number of people is grouped together. For example 
                    <span class="sano-light-italic">
                        20% of respondants with Eczema report that between 3% and 10% of their skin is affected.
                    </span>
                </p>`,
                after_holder_classes: "relative w-full md:w-1/3 px-4 mb-6 max-w-xs lg:max-w-sm mx-auto",
                after_popup: `<div class="w-12 h-12 sano-border-shine sano-border-shine-orange bg-sano-pink-light mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 30 21" class="sano-svg-red-orange w-6 h-6 relative z-10">
                        <g fill="none"><path d="M10.712 11.0683C11.6535 10.0555 12.2405 8.62417 12.2405 7.03764C12.2405 3.96742 10.0423 1.47852 7.33062 1.47852C4.61896 1.47852 2.42073 3.96742 2.42073 7.03764C2.42073 8.48271 2.90771 9.799 3.706 10.7876C3.76783 10.8778 3.83168 10.9672 3.89608 11.0575C4.34931 11.6924 4.83037 12.3664 4.83037 13.6114C4.83037 15.3644 3.38987 16.249 1.8885 16.5736C1.13629 16.715 0.796875 17.4037 0.796875 18.197C0.796875 19.0934 1.52356 19.8201 2.41998 19.8201H12.2397C13.1362 19.8201 13.8628 19.0934 13.8628 18.197C13.8628 17.3975 13.4883 16.7079 12.7273 16.5736C11.226 16.249 9.78547 15.3644 9.78547 13.6114C9.78547 12.3735 10.2611 11.7001 10.712 11.0683Z" stroke="#F75338"/><line x1="18.9766" y1="5.09717" x2="29.2021" y2="5.09717" /><line x1="18.9766" y1="11.9141" x2="29.2021" y2="11.9141" /><line x1="18.9766" y1="18.7314" x2="29.0162" y2="18.7314" /></g>
                    </svg>
                </div>
                <p class="text-sano-red-orange pt-3">
                    Information that you choose to provide will be used to power personalised insights and recommend research that may be relevant for&nbsp;you. 
                </p>`
            },
        ],
    },
    {
        survey_id: "intro",
        title: "Before we start",
        width: "narrower",
        elements: [
            {
                type: "text",
                name: "username",
                title: "What should we call&nbsp;you?",
                isRequired: true,
            },
            {
                type: "html",
                name: "username_explanation",
                html: `<p class="sano-surveyq-explanation">We don’t ask for any data we don’t need, and this doesn’t have to be your full&nbsp;name</p>`,
            },
        ],
    },
    {
        survey_id: "intro",
        title: "Welcome user!",
        elements: [
            {
                type: "checkbox",
                description: "checkbox-cards",
                name: "interests",
                title: '<p>What are you interested&nbsp;in?</p><p class="text-sano-sm py-1">(Click all that apply)</p>',
                isRequired: true,
                choices: [
                    { value: "academic_study", text: "Joining university /&nbsp;non-profit research studies" },
                    {
                        value: "paid_study",
                        text: `Joining paid research studies 
                        <span class="text-sano-sm sano-light" style="line-height: 1.1;">
                            from biotech &amp; pharma companies
                        </span>`,
                    },
                    { value: "reports", text: "Getting personalised reports &amp; insights" },
                    { value: "clinical_trials", text: "Joining clinical trials" },
                ],
            },
        ],
    },
];

const serviceData = [
    {
        id: '101',
        title: 'General health',
        img: 'https://i.ibb.co/0mKwtqJ/service-1.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '102',
        title: 'Dental',
        img: 'https://i.ibb.co/mcRb8BL/service-2.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '103',
        title: 'Screening',
        img: 'https://i.ibb.co/b67GBjV/service-3.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '104',
        title: 'Orthopedics',
        img: 'https://i.ibb.co/x5rCXgj/service-4.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '105',
        title: 'Laboratory',
        img: 'https://i.ibb.co/KwLmTTH/service-5.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '106',
        title: 'Pediatrics',
        img: 'https://i.ibb.co/hHywpnV/service-6.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '107',
        title: 'Neorology',
        img: 'https://i.ibb.co/KwLmTTH/service-5.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '108',
        title: 'Cardiology',
        img: 'https://i.ibb.co/b67GBjV/service-3.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '109',
        title: 'Surgery',
        img: 'https://i.ibb.co/x5rCXgj/service-4.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    },
    {
        id: '110',
        title: 'Gynaecology and Birth',
        img: 'https://i.ibb.co/hHywpnV/service-6.jpg',
        desc: 'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes.Come and meet one of our four world renowned facial plastic and reconstructive surgeons, that can guide you through the process that will change your life Reshape the appearance of body parts through cosmetic surgery. Our surgeons are specialized in reconstructing face, neck, ears, nose, eyes, breasts. We can also guide you through some our patients’ photos and their life changing stories.Care for people with alcohol and other drug addictions. All treatment plans are individualized, ensuring that each person’s unique needs are met to promote healing and recovery. Dignity and respect are foundational values that guide our work.'
    }
]
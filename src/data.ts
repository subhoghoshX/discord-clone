type Message = {
    username: string;
    timestamp: string;
    message: string;
    profBg: string;
}

const messages: Message[] =  [
    {
        username: 'Brad',
        timestamp: 'Today at 6:42 PM',
        message: 'For the classes in the browser, this is indeed a little annoying, but again if you have a few more pages it should work better over time (once your css starts filling up). There are a few solutions we can apply that improves this though, we\'ll see how/when we apply those!',
        profBg: 'bg-indigo-500'
    },
    {
        username: 'Dave',
        timestamp: 'Today at 6:43 PM',
        message: 'Retro cornhole 3 wolf moon, echo park tacos messenger bag poutine palo santo jianbing locavore +1 distillery snackwave lo-fi. Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle. Post-ironic cred readymade meh, cronut humblebrag swag single-origin coffee next level XOXO vice bushwick. Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie.',
        profBg: 'bg-fuchsia-500'
    },
    {
        username: 'John',
        timestamp: 'Today at 6:44 PM',
        message: 'Tacos chicharrones actually vaporware. Bespoke blog post-ironic yr narwhal copper mug. Raclette lomo mustache VHS tilde photo booth echo park slow-carb blog gochujang trust fund.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'Jane Doe',
        timestamp: 'Today at 6:45 PM',
        message: 'Single-origin coffee woke portland vegan shaman, palo santo copper mug kickstarter tousled trust fund.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'harry',
        timestamp: 'Today at 6:46 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-orange-500'
    },
    {
        username: 'peterxyz',
        timestamp: 'Today at 6:52 PM',
        message: 'Normcore vice intelligentsia kogi succulents.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'gwenf',
        timestamp: 'Today at 6:53 PM',
        message: 'Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie. Slow-carb four dollar toast readymade occupy iceland. Raclette beard cornhole everyday carry edison bulb hell of.',
        profBg: 'bg-rose-500'
    },
    {
        username: 'Tony',
        timestamp: 'Today at 6:54 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-violet-500'
    },
    {
        username: 'bruce',
        timestamp: 'Today at 6:55 PM',
        message: 'Helvetica biodiesel neutra, gochujang pork belly tousled cardigan. Vexillologist art party yuccie chicharrones roof party poutine edison bulb knausgaard four dollar toast gluten-free post-ironic. Ugh man bun leggings four loko enamel pin truffaut direct trade tacos sartorial kinfolk forage. Food truck lumbersexual mustache',
        profBg: 'bg-lightBlue-500'
    },
    {
        username: 'Steve',
        timestamp: 'Today at 6:56 PM',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus tellus, eget feugiat lacus.',
        profBg: 'bg-emerald-500'
    },
    {
        username: 'Roger',
        timestamp: 'Today at 6:62 PM',
        message: 'Aenean sit amet risus egestas, venenatis justo vitae, ornare nisl.',
        profBg: 'bg-cyan-500'
    },
    {
        username: 'Jack',
        timestamp: 'Today at 6:63 PM',
        message: 'Aliquam in rhoncus lectus, vitae semper libero. Nam faucibus rhoncus ipsum, eu commodo augue rutrum sollicitudin.',
        profBg: 'bg-teal-500'
    },
    {
        username: 'jill',
        timestamp: 'Today at 6:64 PM',
        message: 'Pellentesque pharetra dui non magna aliquam suscipit.',
        profBg: 'bg-amber-500'
    },
    {
        username: 'hulk',
        timestamp: 'Today at 6:65 PM',
        message: 'Vivamus rhoncus in massa in volutpat.',
        profBg: 'bg-lime-500'
    },
    {
        username: 'Chris',
        timestamp: 'Today at 6:66 PM',
        message: 'Aliquam erat volutpat. Ut lacinia tellus a ante sollicitudin facilisis. Nunc nec odio ut purus ultricies aliquet nec sed ante. Quisque ut maximus ex.',
        profBg: 'bg-red-500'
    },
    {
        username: 'robert',
        timestamp: 'Today at 6:47 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac. In sodales sollicitudin neque id aliquet.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'divine coder',
        timestamp: 'Today at 7:42 PM',
        message: 'Sed at tempor ante.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'Albert',
        timestamp: 'Today at 7:43 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'voldemort',
        timestamp: 'Today at 7:53 PM',
        message: 'Sed ut interdum felis, vitae faucibus purus. Sed at tempor ante. Nulla vitae eros non velit blandit laoreet. Nam pellentesque ultricies hendrerit.',
        profBg: 'bg-red-500'
    },
    {
        username: 'Brad',
        timestamp: 'Today at 6:42 PM',
        message: 'For the classes in the browser, this is indeed a little annoying, but again if you have a few more pages it should work better over time (once your css starts filling up). There are a few solutions we can apply that improves this though, we\'ll see how/when we apply those!',
        profBg: 'bg-indigo-500'
    },
    {
        username: 'Dave',
        timestamp: 'Today at 6:43 PM',
        message: 'Retro cornhole 3 wolf moon, echo park tacos messenger bag poutine palo santo jianbing locavore +1 distillery snackwave lo-fi. Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle. Post-ironic cred readymade meh, cronut humblebrag swag single-origin coffee next level XOXO vice bushwick. Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie.',
        profBg: 'bg-fuchsia-500'
    },
    {
        username: 'John',
        timestamp: 'Today at 6:44 PM',
        message: 'Tacos chicharrones actually vaporware. Bespoke blog post-ironic yr narwhal copper mug. Raclette lomo mustache VHS tilde photo booth echo park slow-carb blog gochujang trust fund.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'Jane Doe',
        timestamp: 'Today at 6:45 PM',
        message: 'Single-origin coffee woke portland vegan shaman, palo santo copper mug kickstarter tousled trust fund.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'harry',
        timestamp: 'Today at 6:46 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-orange-500'
    },
    {
        username: 'peterxyz',
        timestamp: 'Today at 6:52 PM',
        message: 'Normcore vice intelligentsia kogi succulents.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'gwenf',
        timestamp: 'Today at 6:53 PM',
        message: 'Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie. Slow-carb four dollar toast readymade occupy iceland. Raclette beard cornhole everyday carry edison bulb hell of.',
        profBg: 'bg-rose-500'
    },
    {
        username: 'Tony',
        timestamp: 'Today at 6:54 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-violet-500'
    },
    {
        username: 'bruce',
        timestamp: 'Today at 6:55 PM',
        message: 'Helvetica biodiesel neutra, gochujang pork belly tousled cardigan. Vexillologist art party yuccie chicharrones roof party poutine edison bulb knausgaard four dollar toast gluten-free post-ironic. Ugh man bun leggings four loko enamel pin truffaut direct trade tacos sartorial kinfolk forage. Food truck lumbersexual mustache',
        profBg: 'bg-lightBlue-500'
    },
    {
        username: 'Steve',
        timestamp: 'Today at 6:56 PM',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus tellus, eget feugiat lacus.',
        profBg: 'bg-emerald-500'
    },
    {
        username: 'Roger',
        timestamp: 'Today at 6:62 PM',
        message: 'Aenean sit amet risus egestas, venenatis justo vitae, ornare nisl.',
        profBg: 'bg-cyan-500'
    },
    {
        username: 'Jack',
        timestamp: 'Today at 6:63 PM',
        message: 'Aliquam in rhoncus lectus, vitae semper libero. Nam faucibus rhoncus ipsum, eu commodo augue rutrum sollicitudin.',
        profBg: 'bg-teal-500'
    },
    {
        username: 'jill',
        timestamp: 'Today at 6:64 PM',
        message: 'Pellentesque pharetra dui non magna aliquam suscipit.',
        profBg: 'bg-amber-500'
    },
    {
        username: 'hulk',
        timestamp: 'Today at 6:65 PM',
        message: 'Vivamus rhoncus in massa in volutpat.',
        profBg: 'bg-lime-500'
    },
    {
        username: 'Chris',
        timestamp: 'Today at 6:66 PM',
        message: 'Aliquam erat volutpat. Ut lacinia tellus a ante sollicitudin facilisis. Nunc nec odio ut purus ultricies aliquet nec sed ante. Quisque ut maximus ex.',
        profBg: 'bg-red-500'
    },
    {
        username: 'robert',
        timestamp: 'Today at 6:47 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac. In sodales sollicitudin neque id aliquet.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'divine coder',
        timestamp: 'Today at 7:42 PM',
        message: 'Sed at tempor ante.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'Albert',
        timestamp: 'Today at 7:43 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'voldemort',
        timestamp: 'Today at 7:53 PM',
        message: 'Sed ut interdum felis, vitae faucibus purus. Sed at tempor ante. Nulla vitae eros non velit blandit laoreet. Nam pellentesque ultricies hendrerit.',
        profBg: 'bg-red-500'
    },
    {
        username: 'Brad',
        timestamp: 'Today at 6:42 PM',
        message: 'For the classes in the browser, this is indeed a little annoying, but again if you have a few more pages it should work better over time (once your css starts filling up). There are a few solutions we can apply that improves this though, we\'ll see how/when we apply those!',
        profBg: 'bg-indigo-500'
    },
    {
        username: 'Dave',
        timestamp: 'Today at 6:43 PM',
        message: 'Retro cornhole 3 wolf moon, echo park tacos messenger bag poutine palo santo jianbing locavore +1 distillery snackwave lo-fi. Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle. Post-ironic cred readymade meh, cronut humblebrag swag single-origin coffee next level XOXO vice bushwick. Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie.',
        profBg: 'bg-fuchsia-500'
    },
    {
        username: 'John',
        timestamp: 'Today at 6:44 PM',
        message: 'Tacos chicharrones actually vaporware. Bespoke blog post-ironic yr narwhal copper mug. Raclette lomo mustache VHS tilde photo booth echo park slow-carb blog gochujang trust fund.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'Jane Doe',
        timestamp: 'Today at 6:45 PM',
        message: 'Single-origin coffee woke portland vegan shaman, palo santo copper mug kickstarter tousled trust fund.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'harry',
        timestamp: 'Today at 6:46 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-orange-500'
    },
    {
        username: 'peterxyz',
        timestamp: 'Today at 6:52 PM',
        message: 'Normcore vice intelligentsia kogi succulents.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'gwenf',
        timestamp: 'Today at 6:53 PM',
        message: 'Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie. Slow-carb four dollar toast readymade occupy iceland. Raclette beard cornhole everyday carry edison bulb hell of.',
        profBg: 'bg-rose-500'
    },
    {
        username: 'Tony',
        timestamp: 'Today at 6:54 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-violet-500'
    },
    {
        username: 'bruce',
        timestamp: 'Today at 6:55 PM',
        message: 'Helvetica biodiesel neutra, gochujang pork belly tousled cardigan. Vexillologist art party yuccie chicharrones roof party poutine edison bulb knausgaard four dollar toast gluten-free post-ironic. Ugh man bun leggings four loko enamel pin truffaut direct trade tacos sartorial kinfolk forage. Food truck lumbersexual mustache',
        profBg: 'bg-lightBlue-500'
    },
    {
        username: 'Steve',
        timestamp: 'Today at 6:56 PM',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus tellus, eget feugiat lacus.',
        profBg: 'bg-emerald-500'
    },
    {
        username: 'Roger',
        timestamp: 'Today at 6:62 PM',
        message: 'Aenean sit amet risus egestas, venenatis justo vitae, ornare nisl.',
        profBg: 'bg-cyan-500'
    },
    {
        username: 'Jack',
        timestamp: 'Today at 6:63 PM',
        message: 'Aliquam in rhoncus lectus, vitae semper libero. Nam faucibus rhoncus ipsum, eu commodo augue rutrum sollicitudin.',
        profBg: 'bg-teal-500'
    },
    {
        username: 'jill',
        timestamp: 'Today at 6:64 PM',
        message: 'Pellentesque pharetra dui non magna aliquam suscipit.',
        profBg: 'bg-amber-500'
    },
    {
        username: 'hulk',
        timestamp: 'Today at 6:65 PM',
        message: 'Vivamus rhoncus in massa in volutpat.',
        profBg: 'bg-lime-500'
    },
    {
        username: 'Chris',
        timestamp: 'Today at 6:66 PM',
        message: 'Aliquam erat volutpat. Ut lacinia tellus a ante sollicitudin facilisis. Nunc nec odio ut purus ultricies aliquet nec sed ante. Quisque ut maximus ex.',
        profBg: 'bg-red-500'
    },
    {
        username: 'robert',
        timestamp: 'Today at 6:47 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac. In sodales sollicitudin neque id aliquet.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'divine coder',
        timestamp: 'Today at 7:42 PM',
        message: 'Sed at tempor ante.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'Albert',
        timestamp: 'Today at 7:43 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'voldemort',
        timestamp: 'Today at 7:53 PM',
        message: 'Sed ut interdum felis, vitae faucibus purus. Sed at tempor ante. Nulla vitae eros non velit blandit laoreet. Nam pellentesque ultricies hendrerit.',
        profBg: 'bg-red-500'
    },
    {
        username: 'Brad',
        timestamp: 'Today at 6:42 PM',
        message: 'For the classes in the browser, this is indeed a little annoying, but again if you have a few more pages it should work better over time (once your css starts filling up). There are a few solutions we can apply that improves this though, we\'ll see how/when we apply those!',
        profBg: 'bg-indigo-500'
    },
    {
        username: 'Dave',
        timestamp: 'Today at 6:43 PM',
        message: 'Retro cornhole 3 wolf moon, echo park tacos messenger bag poutine palo santo jianbing locavore +1 distillery snackwave lo-fi. Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle. Post-ironic cred readymade meh, cronut humblebrag swag single-origin coffee next level XOXO vice bushwick. Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie.',
        profBg: 'bg-fuchsia-500'
    },
    {
        username: 'John',
        timestamp: 'Today at 6:44 PM',
        message: 'Tacos chicharrones actually vaporware. Bespoke blog post-ironic yr narwhal copper mug. Raclette lomo mustache VHS tilde photo booth echo park slow-carb blog gochujang trust fund.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'Jane Doe',
        timestamp: 'Today at 6:45 PM',
        message: 'Single-origin coffee woke portland vegan shaman, palo santo copper mug kickstarter tousled trust fund.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'harry',
        timestamp: 'Today at 6:46 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-orange-500'
    },
    {
        username: 'peterxyz',
        timestamp: 'Today at 6:52 PM',
        message: 'Normcore vice intelligentsia kogi succulents.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'gwenf',
        timestamp: 'Today at 6:53 PM',
        message: 'Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie. Slow-carb four dollar toast readymade occupy iceland. Raclette beard cornhole everyday carry edison bulb hell of.',
        profBg: 'bg-rose-500'
    },
    {
        username: 'Tony',
        timestamp: 'Today at 6:54 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-violet-500'
    },
    {
        username: 'bruce',
        timestamp: 'Today at 6:55 PM',
        message: 'Helvetica biodiesel neutra, gochujang pork belly tousled cardigan. Vexillologist art party yuccie chicharrones roof party poutine edison bulb knausgaard four dollar toast gluten-free post-ironic. Ugh man bun leggings four loko enamel pin truffaut direct trade tacos sartorial kinfolk forage. Food truck lumbersexual mustache',
        profBg: 'bg-lightBlue-500'
    },
    {
        username: 'Steve',
        timestamp: 'Today at 6:56 PM',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus tellus, eget feugiat lacus.',
        profBg: 'bg-emerald-500'
    },
    {
        username: 'Roger',
        timestamp: 'Today at 6:62 PM',
        message: 'Aenean sit amet risus egestas, venenatis justo vitae, ornare nisl.',
        profBg: 'bg-cyan-500'
    },
    {
        username: 'Jack',
        timestamp: 'Today at 6:63 PM',
        message: 'Aliquam in rhoncus lectus, vitae semper libero. Nam faucibus rhoncus ipsum, eu commodo augue rutrum sollicitudin.',
        profBg: 'bg-teal-500'
    },
    {
        username: 'jill',
        timestamp: 'Today at 6:64 PM',
        message: 'Pellentesque pharetra dui non magna aliquam suscipit.',
        profBg: 'bg-amber-500'
    },
    {
        username: 'hulk',
        timestamp: 'Today at 6:65 PM',
        message: 'Vivamus rhoncus in massa in volutpat.',
        profBg: 'bg-lime-500'
    },
    {
        username: 'Chris',
        timestamp: 'Today at 6:66 PM',
        message: 'Aliquam erat volutpat. Ut lacinia tellus a ante sollicitudin facilisis. Nunc nec odio ut purus ultricies aliquet nec sed ante. Quisque ut maximus ex.',
        profBg: 'bg-red-500'
    },
    {
        username: 'robert',
        timestamp: 'Today at 6:47 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac. In sodales sollicitudin neque id aliquet.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'divine coder',
        timestamp: 'Today at 7:42 PM',
        message: 'Sed at tempor ante.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'Albert',
        timestamp: 'Today at 7:43 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'voldemort',
        timestamp: 'Today at 7:53 PM',
        message: 'Sed ut interdum felis, vitae faucibus purus. Sed at tempor ante. Nulla vitae eros non velit blandit laoreet. Nam pellentesque ultricies hendrerit.',
        profBg: 'bg-red-500'
    },
    {
        username: 'Brad',
        timestamp: 'Today at 6:42 PM',
        message: 'For the classes in the browser, this is indeed a little annoying, but again if you have a few more pages it should work better over time (once your css starts filling up). There are a few solutions we can apply that improves this though, we\'ll see how/when we apply those!',
        profBg: 'bg-indigo-500'
    },
    {
        username: 'Dave',
        timestamp: 'Today at 6:43 PM',
        message: 'Retro cornhole 3 wolf moon, echo park tacos messenger bag poutine palo santo jianbing locavore +1 distillery snackwave lo-fi. Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle. Post-ironic cred readymade meh, cronut humblebrag swag single-origin coffee next level XOXO vice bushwick. Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie.',
        profBg: 'bg-fuchsia-500'
    },
    {
        username: 'John',
        timestamp: 'Today at 6:44 PM',
        message: 'Tacos chicharrones actually vaporware. Bespoke blog post-ironic yr narwhal copper mug. Raclette lomo mustache VHS tilde photo booth echo park slow-carb blog gochujang trust fund.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'Jane Doe',
        timestamp: 'Today at 6:45 PM',
        message: 'Single-origin coffee woke portland vegan shaman, palo santo copper mug kickstarter tousled trust fund.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'harry',
        timestamp: 'Today at 6:46 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-orange-500'
    },
    {
        username: 'peterxyz',
        timestamp: 'Today at 6:52 PM',
        message: 'Normcore vice intelligentsia kogi succulents.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'gwenf',
        timestamp: 'Today at 6:53 PM',
        message: 'Kombucha aesthetic crucifix, pickled portland small batch quinoa you probably haven\'t heard of them blue bottle pitchfork trust fund before they sold out fixie. Slow-carb four dollar toast readymade occupy iceland. Raclette beard cornhole everyday carry edison bulb hell of.',
        profBg: 'bg-rose-500'
    },
    {
        username: 'Tony',
        timestamp: 'Today at 6:54 PM',
        message: 'Hammock gastropub kombucha microdosing hell of biodiesel. Humblebrag enamel pin you probably haven\'t heard of them salvia disrupt vinyl mumblecore hella unicorn master cleanse DIY listicle.',
        profBg: 'bg-violet-500'
    },
    {
        username: 'bruce',
        timestamp: 'Today at 6:55 PM',
        message: 'Helvetica biodiesel neutra, gochujang pork belly tousled cardigan. Vexillologist art party yuccie chicharrones roof party poutine edison bulb knausgaard four dollar toast gluten-free post-ironic. Ugh man bun leggings four loko enamel pin truffaut direct trade tacos sartorial kinfolk forage. Food truck lumbersexual mustache',
        profBg: 'bg-lightBlue-500'
    },
    {
        username: 'Steve',
        timestamp: 'Today at 6:56 PM',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget cursus tellus, eget feugiat lacus.',
        profBg: 'bg-emerald-500'
    },
    {
        username: 'Roger',
        timestamp: 'Today at 6:62 PM',
        message: 'Aenean sit amet risus egestas, venenatis justo vitae, ornare nisl.',
        profBg: 'bg-cyan-500'
    },
    {
        username: 'Jack',
        timestamp: 'Today at 6:63 PM',
        message: 'Aliquam in rhoncus lectus, vitae semper libero. Nam faucibus rhoncus ipsum, eu commodo augue rutrum sollicitudin.',
        profBg: 'bg-teal-500'
    },
    {
        username: 'jill',
        timestamp: 'Today at 6:64 PM',
        message: 'Pellentesque pharetra dui non magna aliquam suscipit.',
        profBg: 'bg-amber-500'
    },
    {
        username: 'hulk',
        timestamp: 'Today at 6:65 PM',
        message: 'Vivamus rhoncus in massa in volutpat.',
        profBg: 'bg-lime-500'
    },
    {
        username: 'Chris',
        timestamp: 'Today at 6:66 PM',
        message: 'Aliquam erat volutpat. Ut lacinia tellus a ante sollicitudin facilisis. Nunc nec odio ut purus ultricies aliquet nec sed ante. Quisque ut maximus ex.',
        profBg: 'bg-red-500'
    },
    {
        username: 'robert',
        timestamp: 'Today at 6:47 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac. In sodales sollicitudin neque id aliquet.',
        profBg: 'bg-blue-500'
    },
    {
        username: 'divine coder',
        timestamp: 'Today at 7:42 PM',
        message: 'Sed at tempor ante.',
        profBg: 'bg-purple-500'
    },
    {
        username: 'Albert',
        timestamp: 'Today at 7:43 PM',
        message: 'Donec laoreet arcu tellus, non faucibus turpis pharetra ac.',
        profBg: 'bg-pink-500'
    },
    {
        username: 'voldemort',
        timestamp: 'Today at 7:53 PM',
        message: 'Sed ut interdum felis, vitae faucibus purus. Sed at tempor ante. Nulla vitae eros non velit blandit laoreet. Nam pellentesque ultricies hendrerit.',
        profBg: 'bg-red-500'
    },
]

export default messages;
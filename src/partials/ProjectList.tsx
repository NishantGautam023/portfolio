import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="House Price Prediction"
        description="Ask a home buyer to describe their dream house, and they probably won't begin with the height of the basement ceiling or the proximity to an east-west railroad. But this model will help us to predict the price of Houses using Machine Learning."
        link="https://github.com/NishantGautam023/Final-Year-Project"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flask</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.SKY}>Machine Learning</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Event Logger"
        description="Logging helps developers know what it is that their code is actually doing, and can help developers save hours of debugging work.One of the key purposes of logging is to save information about each flow or runtime. "
        link="https://github.com/NishantGautam023/Event_log"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Node</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.GREEN}>EXPRESS</Tags>
          </>
        }
      />
      <Project
        name="Drive Booking Application"
        description="Kiosk for G1 G2 and G"
        link="https://github.com/NishantGautam023/SEMII-Express"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Express</Tags>
            <Tags color={ColorTags.INDIGO}>Node</Tags>
            <Tags color={ColorTags.ROSE}>MongoDB</Tags>
            <Tags color={ColorTags.BLUE}>Bootstrap5</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

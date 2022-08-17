import laptop1 from "../Assets/Images/Section4/laptop1.png";
import laptop2 from "../Assets/Images/Section4/laptop2.png";
import laptop3 from "../Assets/Images/Section4/laptop3.png";
import no1 from "../Assets/Images/Section4/no1.png";
import no2 from "../Assets/Images/Section4/no2.png";
import no3 from "../Assets/Images/Section4/no3.png";

//ICONS LIST 
import aella from '../Assets/Images/ServiceSider/aella.png'
import bleyt from '../Assets/Images/ServiceSider/bleyt.png'
import inlaks from '../Assets/Images/ServiceSider/inlaks.png'
import providus from '../Assets/Images/ServiceSider/providus.png'

//LOGINGREENSIDE ICONS
import slack from '../Assets/Images/LoginGreenSide/Slack.png'
import jira from '../Assets/Images/LoginGreenSide/Jira.png'
import github from '../Assets/Images/LoginGreenSide/Github.png'
import gitlab from '../Assets/Images/LoginGreenSide/Gitlab.png'
import bitbucket from '../Assets/Images/LoginGreenSide/Bitbucket.png'

//LOGIN FIELDS
import emoji from "../Assets/Images/FormIcons/Emoji.png"
import key from "../Assets/Images/FormIcons/key.png"
import message from "../Assets/Images/FormIcons/Message.png"

//REQUEST ACCESS FORM ICON
import lockEmoji from "../Assets/Images/RAform/Emoji.png"

//REQUEST QUOTE FORM ICON
import user from "../Assets/Images/RQform/Profile.png"

//RESET PASSWORD FROM ICON
import unlocked from "../Assets/Images/FormIcons/Unlocked.png"

//CHECK ICON
import check from "../Assets/Images/FormIcons/check.png"

//ORGANIZATION ICON 
import organization from "../Assets/Images/FormIcons/organization.png"

//RESPONSIVE 
import mHeader from "../Assets/Images/Responsive/mobileheader.png"

//VERIFY
import verify from "../Assets/Images/Responsive/verified.png"

//RESPONSIVE LOGIN ICONS
import logo from "../Assets/Images/Responsive/APPSTEST.png"
import wave from "../Assets/Images/Responsive/Emoji.png"

//DASHBOARD ICONS
import dLogo from "../Assets/Images/Dashboard/BMLogo.png"

//DASHBOARD NAVIGATION ICONS
import icon1 from "../Assets/Images/Dashboard/Dashboard.png"
import icon2 from "../Assets/Images/Dashboard/Tests.png"
import icon3 from "../Assets/Images/Dashboard/Teams.png"
import icon4 from "../Assets/Images/Dashboard/Reports.png"

//DASHBOARD APPBAR ICONS 
import aicon1 from "../Assets/Images/Dashboard/Chat.png"
import aicon2 from "../Assets/Images/Dashboard/Notification.png"
import aicon3 from "../Assets/Images/Dashboard/Setting.png"
import aicon4 from "../Assets/Images/Dashboard/Upload.png"

//MDOAL DEVICE IMAGES STEP 1
import ios from "../Assets/Images/ModalStep1/ios.png"
import android from "../Assets/Images/ModalStep1/android.png"
import web from "../Assets/Images/ModalStep1/web.png"
import api from "../Assets/Images/ModalStep1/api.png"


export const LPsection3 = [
    {
        img: laptop1,
        icon: no1,
        head: "Create your team account",
        text: "Hit the ground running as soon as you are ready. Create an account in minutes, invite your team members and we'll take care of every other heavy lifting for you."
    },
    {
        img: laptop2,
        icon: no2,
        head: "Setup your test schedule",
        text: "Hit the ground running as soon as you are ready. Create an account in minutes, invite your team members and we'll take care of every other heavy lifting for you."
    },
    {
        img: laptop3,
        icon: no3,
        head: "Results",
        text: "Hit the ground running as soon as you are ready. Create an account in minutes, invite your team members and we'll take care of every other heavy lifting for you."
    }
]

export const IconsList1 = [
    {img:aella},
    {img:bleyt},
    {img:inlaks},
    {img:providus}
]

export const Services = [
    {info: "Increase development and QA efficency for team impact"},
    {info: "Efficently manage text and decrease the time required on designing and coding manual to automated tests"},
    {info: "Conduct rapid regression testing to increase release confidence"},
    {info: "Design QA stategy for long-term success and greater ROI"}
]

export const LoginGreenSideIcons = [
    {
        icon:slack,
        name:"slack"
    },
    {
        icon:jira,
        name:"jira"
    },
    {
        icon:gitlab,
        name:"github"
    },
    {
        icon:gitlab,
        name:"gitlab"
    },
    {
        icon:bitbucket,
        name:"bitbucket"
    }
]

export const LoginGreenSideText = [
    {
        head: "On-demand testing inside the tools you already use",
        body: "Maximise team productivity by easily integrating your tech stack with our platform"
    }
]

export const LoginFormImgs = [emoji,key,message,lockEmoji,user,unlocked,check,organization,mHeader,verify]
export const RLoginIcons = [logo,wave]

export const PasswordRequirement = [
    {info: "Must contain a lowercase letter"},
    {info: "Must contain a uppercase letter"},
    {info: "Must contain a number"},
    {info: "Must contain a non-alphanumeric charater"}
]

//DASHBOARD
export const DImages = [dLogo]

export const DashNavElements = [
    {
        icon: icon1,
        name: "Dashboard"
    },
    {
        icon: icon2,
        name: "Tests"
    },
    {
        icon: icon3,
        name: "Teams"
    },
    {
        icon: icon4,
        name: "Report"
    },
]

export const appbarIcons = [
    {
        icon: aicon1
    },
    {
        icon: aicon2
    },
    {
        icon: aicon3
    },
    {
        icon: aicon4
    },
]

//STEPS TO CREATE TEST
export const steps = [
    {
        no: "Step 1",
        head: "Invite Teams",
        body: "You can invite more than your team members to join before moving your product to production",
        button: "Invite team"
    },
    {
        no: "Step 2",
        head: "Create a test",
        body: "You can create your test by providing every nessecary info about your product for testing",
        button: "Create test"
    },
    {
        no: "Step 3",
        head: "Test result",
        body: "You can upload your test tasks and we connect a certified tester to your project",
        button: "Upload"
    }
]

//HELP AND RESOURCES

export const hr = [
    {
        head: "New to Software Testing?",
        body: "Start with the course Bug Reproduction to learn about what bugs are and how to document bug reports by reproducing the bugs submited by more experienced testers.",
        button: "Bug Reproductions"
    },
    {
        head: "Experienced?",
        body: "Start with the course Exploratory Testing and practice your skill on live websites and apps!",
        button: "Exploratory Testing"
    },
]

//MODAL DEVICE SELECTION AND LINK
export const dSelectAndLink = [
    {
        name: "Android",
        img: android,
        link: "#"
    },
    {
        name: "IOS",
        img: ios,
        link: "#"
    },
    {
        name: "Web",
        img: web,
        link: "#"
    },
    {
        name: "API",
        img: api,
        link: "#"
    }
]

//DEVICE VERSION 
export const deviceVersions = [
    {version: "Lower than 7.0"},
    {version: 8.0},
    {version: 9.0},
    {version: 10.0},
    {version: 11.0},
    {version: 12.0},
]
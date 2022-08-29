import Alerta from "./Alerta.vue";
import AlertNow from "./AlertNow.vue";
import AliyunSMS from "./AliyunSms.vue";
import Apprise from "./Apprise.vue";
import Bark from "./Bark.vue";
import ClickSendSMS from "./ClickSendSMS.vue";
import DingDing from "./DingDing.vue";
import Discord from "./Discord.vue";
import Feishu from "./Feishu.vue";
import GoogleChat from "./GoogleChat.vue";
import Gorush from "./Gorush.vue";
import Gotify from "./Gotify.vue";
import HomeAssistant from "./HomeAssistant.vue";
import Line from "./Line.vue";
import LineNotify from "./LineNotify.vue";
import LunaSea from "./LunaSea.vue";
import Matrix from "./Matrix.vue";
import Mattermost from "./Mattermost.vue";
import Ntfy from "./Ntfy.vue";
import Octopush from "./Octopush.vue";
import OneBot from "./OneBot.vue";
import PagerDuty from "./PagerDuty.vue";
import PromoSMS from "./PromoSMS.vue";
import Pushbullet from "./Pushbullet.vue";
import PushDeer from "./PushDeer.vue";
import Pushover from "./Pushover.vue";
import Pushy from "./Pushy.vue";
import RocketChat from "./RocketChat.vue";
import SerwerSMS from "./SerwerSMS.vue";
import Signal from "./Signal.vue";
import Slack from "./Slack.vue";
import Stackfield from "./Stackfield.vue";
import STMP from "./SMTP.vue";
import Teams from "./Teams.vue";
import TechulusPush from "./TechulusPush.vue";
import Telegram from "./Telegram.vue";
import Webhook from "./Webhook.vue";
import WeCom from "./WeCom.vue";

/**
 * Manage all notification form.
 *
 * @type { Record<string, any> }
 */
const NotificationFormList = {
    "alerta": Alerta,
    "AlertNow": AlertNow,
    "AliyunSMS": AliyunSMS,
    "apprise": Apprise,
    "Bark": Bark,
    "clicksendsms": ClickSendSMS,
    "DingDing": DingDing,
    "discord": Discord,
    "Feishu": Feishu,
    "GoogleChat": GoogleChat,
    "gorush": Gorush,
    "gotify": Gotify,
    "HomeAssistant": HomeAssistant,
    "line": Line,
    "LineNotify": LineNotify,
    "lunasea": LunaSea,
    "matrix": Matrix,
    "mattermost": Mattermost,
    "ntfy": Ntfy,
    "octopush": Octopush,
    "OneBot": OneBot,
    "PagerDuty": PagerDuty,
    "promosms": PromoSMS,
    "pushbullet": Pushbullet,
    "PushByTechulus": TechulusPush,
    "PushDeer": PushDeer,
    "pushover": Pushover,
    "pushy": Pushy,
    "rocket.chat": RocketChat,
    "serwersms": SerwerSMS,
    "signal": Signal,
    "slack": Slack,
    "smtp": STMP,
    "stackfield": Stackfield,
    "teams": Teams,
    "telegram": Telegram,
    "webhook": Webhook,
    "WeCom": WeCom,
};

export default NotificationFormList;

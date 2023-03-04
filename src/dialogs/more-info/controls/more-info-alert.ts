import { HassEntity } from "home-assistant-js-websocket";
import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators";
import "../../../components/ha-attributes";
import { HomeAssistant } from "../../../types";

@customElement("more-info-alert")
class MoreInfoAlert extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property() public stateObj?: HassEntity;

  protected render() {
    if (!this.hass || !this.stateObj) {
      return nothing;
    }

    return html`<div>love josh</div><ha-attributes
      .hass=${this.hass}
      .stateObj=${this.stateObj}
    ></ha-attributes>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "more-info-alert": MoreInfoAlert;
  }
}

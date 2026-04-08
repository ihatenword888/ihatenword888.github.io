/**
 * @typedef {"available" | "busy" | "unavailable" | "offline"} StatusType
 */
export class Status {
  /**
   * @param {StatusType} state
   */
  constructor(state = "available") {
    this.state = state
  }

  /** @returns {string} */
  getCurState() {
    return this.state;
  }

  /** @returns {string} */
  getLabel() {
    switch (this.state) {
      case "available":
        return "Available for new opportunities";
      case "busy":
        return "Open to part-time or limited work";
      case "unavailable":
        return "Currently unavailable for new work";
      case "offline":
        return "Not accepting new requests at this time";
      default:
        return "Available for new opportunities";
    }
  }

  /** @return {{string, string}} */
  getColor() {
    switch (this.state) {
      case "available":
        return { color: "#22c55e", shadow: "0 0 18px rgba(34, 197, 94, 0.4)"};
      case "busy":
        return { color: "#eab308", shadow: "0 0 18px rgba(234, 179, 8, 0.4)"};
      case "unavailable":
        return { color: "#ef4444", shadow: "0 0 18px 0 0 18px rgba(239, 68, 68, 0.4)"};
      case "offline":
        return { color: "#6b7280", shadow: "0 0 18px rgba(107, 114, 128, 0.28)"};
      default:
          return { color: "#22c55e", shadow: "0 0 18px rgba(34, 197, 94, 0.4)"};
    }
  }
}

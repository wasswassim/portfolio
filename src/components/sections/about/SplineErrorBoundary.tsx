"use client";

import { Component } from "react";
import type { ReactNode } from "react";

// Catches fetch errors thrown by the Spline runtime (e.g. network unavailable)
export default class SplineErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

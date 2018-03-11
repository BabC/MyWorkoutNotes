export class StringFormat {

  static capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }
}

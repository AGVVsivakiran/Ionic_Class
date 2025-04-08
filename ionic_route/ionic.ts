// In your component
constructor(private router: Router) {}

goToPage() {
  this.router.navigate(['/page-name']);
}
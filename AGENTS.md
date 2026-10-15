<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the uploaded salon frontend on the existing TanStack index route; it is the source experience, not a redesign.
- Store uploaded media as asset pointer imports; this preserves the source photos without committing binaries.
- Keep review excerpts and their source in a browser-safe data module and render them in an isolated section; never invent authors, ratings, or claim live synchronization.

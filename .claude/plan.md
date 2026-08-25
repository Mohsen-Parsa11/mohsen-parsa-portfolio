# Edit Workflow feature — implementation plan

## Goal
Wire the currently-inert **Edit** button in the advisor `WorkFlowStepper` to a slide-over panel that lets the advisor edit the service workflow (reorder / add / edit / delete steps), and build out the in-progress step so each workflow step is clickable and its Options dropdown opens the right modals. Add four cleanly-titled document/update sections below.

## Decisions (confirmed with user)
- **Save path:** design + persist via the existing `updateAdvisorServiceList` mutation (its `serviceWorkflow` array of `{ stepTitle, description, duration }`). No new GraphQL documents — the `updateWorkflow`/`updateWorkflowStep` schema types have no generated hooks yet.
- **Edit view:** slide-over panel (right drawer), matching the existing `motion/react` drawer pattern.
- **Four sections:** all mock/static data for now.

## Files to create

1. **`.../services-steppers/components/modals/EditWorkflowPanel.tsx`**
   - Right-side slide-over (framer `motion/react`, `AnimatePresence`), matching `MobileFilterDrawer` motion conventions but anchored right + full-height.
   - Local working copy of steps (seeded from `serviceWorkflow`). Each row reuses the `WorkflowSection` visual (grip icon, title, description, duration badge) plus **Move up / Move down** arrow buttons for reordering, and edit/delete actions.
   - "+ Add Step" opens `WorkflowStepModal` in ADD mode.
   - Footer: Cancel / Save. Save maps working copy → `updateAdvisorServiceList` `serviceWorkflow` payload (`stepTitle`, `description`, `duration`) and calls the mutation with `updateAdvisorServiceListId: serviceListId`, then toasts + closes. Refetch `GetAdvisorServiceList`.

2. **`.../services-steppers/components/modals/WorkflowStepModal.tsx`**
   - Add/Edit step modal: fields **Step Title, Description, Duration** (react-hook-form + yup, reusing `WorkflowStepSchema` style). Modeled on the existing `workflow-modal.tsx`. Returns the step to the panel via `onSaveAction` (no network call here — panel owns state).

3. **`.../services-steppers/components/modals/UpdateWorkflowModal.tsx`**
   - "Update Workflow" modal: **Title + Description only** (no file). Same visual shell as `RequiredDocumentModal`. Mock submit (adds to the local "Workflow Updates" list + toast).

4. **`.../services-steppers/components/modals/UploadDocumentModal.tsx`**
   - Image/file upload modal styled like `RequiredDocumentModal`: drag-and-drop / file input (reuse the `AdvisorUploadDocumentCard` dropzone styling), preview, submit. Mock for now.

5. **`.../services-steppers/components/DocumentSections.tsx`** (or four small section components)
   - Four titled sections rendered as cards, static/mock data:
     - **Required Documents** — "Documents the customer must provide"
     - **Customer Uploaded Documents** — "Files the customer has submitted for this step"
     - **Workflow Updates** — "Notes and progress updates you've shared"
     - **Completed Step Documents** — "Deliverables from previously completed workflow steps"

## Files to edit

6. **`WorkFlowStepper.tsx`**
   - Add `onEditAction` prop + `onStepClickAction(index)` prop. Wire the Edit button to `onEditAction`. Make each `SwiperSlide` step clickable → `onStepClickAction(index)`.
   - Fix the `active`/`completed` logic so the clicked step highlights (currently `active = index === currentStep` but completed uses `< currentStep`; align to a single selected index).

7. **`ServiceInProgressStep.tsx`**
   - Add state: `editPanelOpen`, `uploadDocOpen`, `updateWorkflowOpen`, and make `currentStep` actually settable (it's `_setCurrentStep` unused now) so step clicks navigate.
   - Pass `onEditAction`/`onStepClickAction` to `WorkFlowStepper`.
   - Wire the Options dropdown buttons: "New Required Document" → existing `RequiredDocumentModal`; "Upload Document" → `UploadDocumentModal`; "Update Workflow" → `UpdateWorkflowModal`.
   - Render `EditWorkflowPanel` and the new `DocumentSections` below `AdvisorUploadDocumentCard`.
   - Thread `serviceListId` into the panel for the save mutation.

## Verification
- `npm run build` (or the project's typecheck/lint) after changes; fix any type/lint errors. Reuse existing `Button`, `motion/react`, `lucide-react`, `sonner` toast, and yup schema conventions already in these folders.

## Out of scope / notes
- Reordering is client-side only within the panel; order is persisted implicitly by the array order sent to `updateAdvisorServiceList`.
- No new GraphQL files; if per-step ordering later needs the real `updateWorkflowStep` mutation, that's a follow-up.
